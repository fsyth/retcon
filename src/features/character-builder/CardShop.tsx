import React, { useCallback, useState } from 'react'
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary } from '@mui/joy'

import CardFilters from './CardFilters'
import CardsByGroup from './CardsByGroup'

import type { CardState } from './cards'
import { useAppSelector } from '../../app/hooks'
import { selectAllCards } from './characterBuilderSlice'

interface CardShopProps {
  filter?: (card: CardState) => boolean
  showConflictTooltips?: boolean
  userFilters?: boolean
  groupBy?: (card: CardState) => string
}

export default function CardShop({
  filter, showConflictTooltips, userFilters, groupBy
}: CardShopProps) {
  const [userFilter, setUserFilter] = useState(() => (card: CardState) => true)
  const handleUserFilterChanged = useCallback(
    (filter: (card: CardState) => boolean) => setUserFilter(() => filter), [])

  // Apply filter from props and user filters
  const allCards = useAppSelector(selectAllCards)
  const filteredCards =
    (filter ? allCards.filter(filter) : allCards)
    .filter(userFilter)

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
    </AccordionGroup>
  )
}
