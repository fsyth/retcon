import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary } from '@mui/joy'

import CardFilters from './CardFilters'
import CardsByGroup from './CardsByGroup'
import CardGrid from './CardGrid'

import type { CardState } from './cards'
import { useAppSelector } from '../../app/hooks'
import { selectAllCards, selectSelectedCards } from './characterBuilderSlice'

interface CardShopProps {
  filter?: (card: CardState) => boolean
  showSoldOut?: boolean
  showConflictTooltips?: boolean
  userFilters?: boolean
  groupBy?: (card: CardState) => string
}

export default function CardShop({
  filter, showSoldOut, showConflictTooltips, userFilters, groupBy
}: CardShopProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([-7, 17])
  const [selections, setSelections] = useState<string[]>([])

  const userFilter = (card: CardState) =>
    !userFilters || (
      (priceRange[0] <= card.pointCost && card.pointCost <= priceRange[1]) &&
      (selections.length === 0 ||
        selections.includes(card.category) ||
        (card.slot !== undefined && selections.includes(card.slot))
      )
    )

  // To detect conflicts
  const selectedCards = useAppSelector(selectSelectedCards)
  
  // Apply filter from props and user filters
  const allCards = useAppSelector(selectAllCards)
  const filteredCards = (filter ? allCards.filter(filter) : allCards).filter(userFilter)

  const availableCards = filteredCards.filter(card => card.copiesAvailable > 0)

  const cardsWithConflicts = availableCards.map(card =>
    [card, card.slot && selectedCards.find(sc => sc.slot === card.slot)]) as
    [CardState, CardState | undefined][]

  return (
    <AccordionGroup>
      <Accordion defaultExpanded={true}>
        <AccordionSummary>Card Shop</AccordionSummary>
        <AccordionDetails>
          {userFilters &&
            <CardFilters
              selections={selections} setSelections={setSelections}
              priceRange={priceRange} setPriceRange={setPriceRange} />
          }
          {cardsWithConflicts.length === 0
            ? <p>Nothing to see here.</p>
            : <CardsByGroup 
                cardsWithConflicts={cardsWithConflicts}
                groupBy={groupBy}
                showConflictTooltips={showConflictTooltips} 
                canBuy />
          }
        </AccordionDetails>
      </Accordion>
      {showSoldOut &&
        <Accordion>
          <AccordionSummary>Sold Out</AccordionSummary>
          <AccordionDetails>
            <CardGrid
              cardsWithConflicts={filteredCards
                .filter(card => card.copiesAvailable <= 0)
                .map(card => [card, undefined])}
              canBuy />
          </AccordionDetails>
        </Accordion>
      }
    </AccordionGroup>
  )
}
