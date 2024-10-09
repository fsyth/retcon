import React from 'react'
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary } from '@mui/joy'

import Card from './Card'

import type { CardState } from './cards'
import { useAppSelector } from '../../app/hooks'
import { selectSelectedCards } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

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
            : <div className={style.cardGrid}>
                {cards.map(card =>
                  <Card key={card.id} id={card.id} canSell />
                )}
              </div>
          }
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  )
}
