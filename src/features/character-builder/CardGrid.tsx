import React from 'react'

import Card from './Card'

import type { CardState } from './cards'

import style from './CharacterBuilder.module.css'

interface CardGridProps {
  cardsWithConflicts: [CardState, CardState?][]
  canBuy?: boolean
  canSell?: boolean
  showConflictTooltips?: boolean
}

export default function CardGrid({
  cardsWithConflicts, canBuy, canSell, showConflictTooltips
}: CardGridProps) {
  return (
    <div className={style.cardGrid}>
      {cardsWithConflicts.map(([card, conflict]) =>
        <Card 
          key={card.id}
          id={card.id}
          conflict={conflict?.id}
          canBuy={canBuy}
          canSell={canSell}
          showConflictTooltip={showConflictTooltips} />
      )}
    </div>
  )
}
