import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { allCards, type CardState } from './cards';
import { initialCharacter, type CharacterState } from './character';

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

      if (card.slot !== undefined) {
        const conflictingCardId = state.selectedCards.find(c => c.slot === card.slot)?.id
        if (conflictingCardId !== undefined) {
          const conflictingCard = state.allCards.find(c => c.id === conflictingCardId)
          if (conflictingCard !== undefined) {
            conflictingCard.copiesAvailable += 1
            state.selectedCards = state.selectedCards.filter(c => c.id !== conflictingCard.id)
          }
        }
      }

      state.selectedCards.push(card)
      card.copiesAvailable -= 1
    },
    sellCard: (state, action: PayloadAction<string>) => {
      const card = state.allCards.find(c => c.id === action.payload)

      if (card === undefined)
        return

      card.copiesAvailable += 1
      state.selectedCards = state.selectedCards.filter(c => c.id !== card.id)
    },
    setPointBudget: (state, action: PayloadAction<number>) => {
      state.pointBudget = action.payload
    },
  },
});

export const { buyCard, sellCard, setPointBudget } = characterBuilderSlice.actions;

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

export default characterBuilderSlice.reducer;
