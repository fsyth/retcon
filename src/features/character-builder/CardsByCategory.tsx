import React from 'react'
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary } from '@mui/joy'

import type { CardState } from './cards'

import Card from './Card'

import style from './CharacterBuilder.module.css'

interface CardsByCategoryProps {
  cards: CardState[]
  canBuy?: boolean
  canSell?: boolean
}

export default function CardsByCategory({ cards, canBuy, canSell }: CardsByCategoryProps) {
  // Ordered set of categories
  const categories: string[] = []
  
  for (let card of cards)
    if (!categories.includes(card.category))
      categories.push(card.category)

  return (
    <AccordionGroup>
      {categories.map(category =>
        <Accordion key={category} defaultExpanded={true}>
          <AccordionSummary>{category}</AccordionSummary>
          <AccordionDetails className={style.cardGrid}>
            {cards.filter(card => card.category === category).map(card =>
              <Card key={card.id} id={card.id} canBuy={canBuy} canSell={canSell} />
            )}
          </AccordionDetails>
        </Accordion>
      )}
    </AccordionGroup>
  )
}
