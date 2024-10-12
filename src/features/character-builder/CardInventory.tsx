import React from 'react'
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary } from '@mui/joy'

import CardGrid from './CardGrid'

import type { CardState } from './cards'
import { useAppSelector } from '../../app/hooks'
import { selectSelectedCards } from './characterBuilderSlice'


interface CardInventoryProps {
  filter?: (card: CardState) => boolean
}

export default function CardInventory({ filter }: CardInventoryProps) {
  const allCards = useAppSelector(selectSelectedCards)
  const cards = filter ? allCards.filter(filter) : allCards

  return (
    <AccordionGroup>
      <Accordion defaultExpanded={true}>
        <AccordionSummary>Selected Cards</AccordionSummary>
        <AccordionDetails>
          {cards.length === 0
            ? <p>No cards selected.</p>
            : <CardGrid cards={cards} canSell />
          }
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  )
}
