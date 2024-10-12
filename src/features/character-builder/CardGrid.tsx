import React from 'react'

import Card from './Card'

import type { CardState } from './cards'

import style from './CharacterBuilder.module.css'

interface CardGridProps {
  cards: CardState[]
  canBuy?: boolean
  canSell?: boolean
  showConflictTooltips?: boolean
}

export default function CardGrid({
  cards, canBuy, canSell, showConflictTooltips
}: CardGridProps) {
  return (
    <div className={style.cardGrid}>
      {cards.map(card =>
        <Card 
          key={card.id}
          id={card.id}
          canBuy={canBuy}
          canSell={canSell}
          showConflictTooltip={showConflictTooltips} />
      )}
    </div>
  )
}
