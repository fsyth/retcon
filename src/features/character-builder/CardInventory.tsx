import React from 'react'
import { Accordion } from 'react-bootstrap'

import { useAppSelector } from '../../app/hooks'
import { CardState } from './cards'
import { selectSelectedCards } from './characterBuilderSlice'

import Card from './Card'

import style from './CharacterBuilder.module.css'

interface CardInventoryProps {
  filter?: (card: CardState) => boolean
}

export default function CardInventory({ filter }: CardInventoryProps) {
  const allCards = useAppSelector(selectSelectedCards)
  const cards = filter ? allCards.filter(filter) : allCards

  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Selected Cards</Accordion.Header>
        <Accordion.Body className={style.cardGrid}>
          {cards.map(card =>
            <Card key={card.id} id={card.id} canSell={true} />
          )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
