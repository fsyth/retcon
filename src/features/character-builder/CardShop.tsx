import React, { useCallback, useState } from 'react'
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary } from '@mui/joy'

import CardFilters from './CardFilters'
import CardsByGroup from './CardsByGroup'
import CardGrid from './CardGrid'

import type { CardState } from './cards'
import { useAppSelector } from '../../app/hooks'
import { selectAllCards } from './characterBuilderSlice'

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
  const [userFilter, setUserFilter] = useState(() => (card: CardState) => true)
  const handleUserFilterChanged = useCallback(
    (filter: (card: CardState) => boolean) => setUserFilter(() => filter), [])

  // Apply filter from props and user filters
  const allCards = useAppSelector(selectAllCards)
  const filteredCards =
    (filter ? allCards.filter(filter) : allCards)
    .filter(userFilter)
    .filter(card => card.copiesAvailable > 0)

  return (
    <AccordionGroup>
      <Accordion defaultExpanded={true}>
        <AccordionSummary>Card Shop</AccordionSummary>
        <AccordionDetails>
          {userFilters &&
            <CardFilters onFiltersChanged={handleUserFilterChanged} />
          }
          {filteredCards.length === 0
            ? <p>Nothing to see here.</p>
            : <CardsByGroup 
                cards={filteredCards}
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
              cards={filteredCards.filter(card => card.copiesAvailable <= 0)}
              canBuy />
          </AccordionDetails>
        </Accordion>
      }
    </AccordionGroup>
  )
}
