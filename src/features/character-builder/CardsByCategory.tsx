import React from 'react'
import { Accordion } from 'react-bootstrap'

import { CardState } from './cards'

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
    <Accordion flush>
      {categories.map(category =>
        <Accordion.Item key={category} eventKey={category}>
          <Accordion.Header>{category}</Accordion.Header>
          <Accordion.Body className={style.cardGrid}>
            {cards.filter(card => card.category === category).map(card =>
              <Card key={card.id} id={card.id} canBuy={canBuy} canSell={canSell} />
            )}
          </Accordion.Body>
        </Accordion.Item>
      )}
    </Accordion>
  )
}
