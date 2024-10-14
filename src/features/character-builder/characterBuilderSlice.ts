import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'
import { allCards, type CardState } from './cards'
import { initialCharacter, type CharacterState } from './character'
import { decodeBigIntStringToBools, encodeBoolsToBigIntString } from './utils'

export interface CharacterBuilderState {
  pointBudget: number
  selectedCards: CardState[]
  allCards: CardState[]
}

const initialState: CharacterBuilderState = {
  pointBudget: 20,
  selectedCards: [],
  allCards,
}

export const characterBuilderSlice = createSlice({
  name: 'characterBuilder',
  initialState,
  reducers: {
    buyCard: (state, action: PayloadAction<string>) => {
      const card = state.allCards.find(c => c.id === action.payload)

      if (card === undefined || card.copiesAvailable <= 0)
        return

      // Replace the card, if any, occupying the slot
      if (card.slot !== undefined) {
        const conflictingCardId = state.selectedCards.find(c => c.slot === card.slot)?.id
        if (conflictingCardId !== undefined) {
          const conflictingCard = state.allCards.find(c => c.id === conflictingCardId)
          if (conflictingCard !== undefined) {
            conflictingCard.copiesAvailable += 1
            state.selectedCards = state.selectedCards.filter(c => c.id !== conflictingCardId)
          }
        }
      }

      state.selectedCards.push(card)
      card.copiesAvailable -= 1
    },
    sellCard: (state, action: PayloadAction<string>) => {
      // Can only sell cards that have been selected
      if (!state.selectedCards.find(c => c.id === action.payload))
        return

      // Need to write to the card instance in the shop
      const card = state.allCards.find(c => c.id === action.payload)

      if (card === undefined)
        return

      card.copiesAvailable += 1
      state.selectedCards = state.selectedCards.filter(c => c.id !== card.id)
    },
    setPointBudget: (state, action: PayloadAction<number>) => {
      state.pointBudget = action.payload
    },
    decodeStateFromUri: (state, action: PayloadAction<string>) => {
      if (action.payload === '')
        return

      const { allCards } = state

      const [pointBudgetToken, selectionsToken] = action.payload.split(tokenSeparator)

      const pointBudget = parseInt(pointBudgetToken, 36)
      const bools = decodeBigIntStringToBools(selectionsToken, allCards.length)

      characterBuilderSlice.caseReducers.setPointBudget(
        state, { type: 'setPointBudget', payload: pointBudget })

      for (let i = 0; i < allCards.length; ++i) {
        if (bools[i])
          characterBuilderSlice.caseReducers.buyCard(
            state, { type: 'buyCard', payload: allCards[i].id })
      }
    },
  },
})

export const { buyCard, sellCard, setPointBudget, decodeStateFromUri } = characterBuilderSlice.actions

export const selectSelectedCards = (state: RootState) => state.characterBuilder.selectedCards

export const selectAllCards = (state: RootState) => state.characterBuilder.allCards

export const selectCardById = (id: string) => (state: RootState) =>
  selectAllCards(state).find(card => card.id === id)

export const selectPointBudget = (state: RootState) => state.characterBuilder.pointBudget

export const selectPointsSpent = createSelector([selectSelectedCards], selectedCards =>
  selectedCards.reduce((sum, card) => sum + card.pointCost, 0))

export const selectCharacter = createSelector([selectSelectedCards], selectedCards => {
  // Character is generated from the initial character and the card
  // selection. It is not stored state.
  let character = {...initialCharacter}

  for (let card of selectedCards) {
    character = {...character, ...card.effect}
  }

  return character as CharacterState
})

const tokenSeparator = '+'

export const selectEncodedUri = createSelector(
  [selectAllCards, selectSelectedCards, selectPointBudget],
  (allCards, selectedCards, pointBudget) => [
    pointBudget.toString(36),
    encodeBoolsToBigIntString(allCards.map(card => selectedCards.includes(card)))
  ].join(tokenSeparator)
)

export default characterBuilderSlice.reducer
