import React from 'react'
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary } from '@mui/joy'

import Card from './Card'

import type { CardState } from './cards'
import { useAppSelector } from '../../app/hooks'
import { selectAllCards, selectSelectedCards } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

interface CardShopProps {
  filter?: (card: CardState) => boolean
  showSoldOut?: boolean
  showConflictTooltips?: boolean
}

export default function CardShop(
  { filter, showSoldOut, showConflictTooltips }: CardShopProps
) {
  // To detect conflicts
  const selectedCards = useAppSelector(selectSelectedCards)
  
  // Apply filter from props
  const allCards = useAppSelector(selectAllCards)
  const filteredCards = filter ? allCards.filter(filter) : allCards

  const availableCards = filteredCards.filter(card => card.copiesAvailable > 0)

  const cardsWithConflicts = availableCards.map(card =>
    [card, card.slot && selectedCards.find(sc => sc.slot === card.slot)]) as
    [CardState, CardState | undefined][]

  // const buyableCards = cardsWithConflicts
  //   .filter(([_, conflict]) => conflict === undefined)
  //   .map(([card, _]) => card)

  // const replacableCards = cardsWithConflicts
  //   .filter(([_, conflict]) => conflict !== undefined)

  //todo add filter buttons or a search bar as a component that wraps this

  return (
    <AccordionGroup>
      <Accordion defaultExpanded={true}>
        <AccordionSummary>Card Shop</AccordionSummary>
        <AccordionDetails>
          <div className={style.cardGrid}>
            {cardsWithConflicts.map(([card, conflict]) =>
                <Card
                  key={card.id}
                  id={card.id}
                  canBuy={true}
                  conflict={conflict?.id}
                  showConflictTooltip={showConflictTooltips}
                />
            )}
          </div>
        </AccordionDetails>
      </Accordion>
      {showSoldOut &&
        <Accordion>
          <AccordionSummary>Sold Out</AccordionSummary>
          <AccordionDetails>
            <div className={style.cardGrid}>
              {filteredCards.filter(card => card.copiesAvailable <= 0).map(card =>
                <Card
                  key={card.id}
                  id={card.id}
                  canBuy={true} />
              )}
            </div>
          </AccordionDetails>
        </Accordion>
      }
    </AccordionGroup>
  )
}
