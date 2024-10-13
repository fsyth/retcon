import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary } from '@mui/joy'

import CardFilters from './CardFilters'
import CardsByGroup from './CardsByGroup'

import type { CardState } from './cards'
import { useAppSelector } from '../../app/hooks'
import { selectAllCards, selectSelectedCards } from './characterBuilderSlice'

interface CardShopProps {
  filter?: (card: CardState) => boolean
  showConflictTooltips?: boolean
  userFilters?: boolean
  groupBy?: (card: CardState) => string
}

export default function CardShop({
  filter, showConflictTooltips, userFilters, groupBy
}: CardShopProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([-7, 17])
  const [selections, setSelections] = useState<string[]>([])
  const [showBuy, setShowBuy] = useState(false)
  const [showReplace, setShowReplace] = useState(false)
  const [showSoldOut, setShowSoldOut] = useState(false)
  
  const selectedCards = useAppSelector(selectSelectedCards)

  const userFilter = (card: CardState) => {
    const conflict = card.slot && selectedCards.find(c => c.slot === card.slot)
    const isSoldOut = card.copiesAvailable === 0
    const isReplace = !isSoldOut && conflict !== undefined
    const isBuy = !isSoldOut && !isReplace

    return (
      (priceRange[0] <= card.pointCost && card.pointCost <= priceRange[1]) &&
      (
        selections.length === 0 ||
        selections.includes(card.category) ||
        (card.slot !== undefined && selections.includes(card.slot))
      ) &&
      (
        (!showBuy && !showReplace && !showSoldOut) ||
        (showBuy && isBuy) ||
        (showReplace && isReplace) ||
        (showSoldOut && isSoldOut)
      )
    )
  }

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
            <CardFilters
              priceRange={priceRange} setPriceRange={setPriceRange}
              selections={selections} setSelections={setSelections}
              showBuy={showBuy} setShowBuy={setShowBuy}
              showReplace={showReplace} setShowReplace={setShowReplace}
              showSoldOut={showSoldOut} setShowSoldOut={setShowSoldOut} />
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
