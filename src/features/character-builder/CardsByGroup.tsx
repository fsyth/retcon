import React from 'react'
import { Divider } from '@mui/joy'

import CardGrid from './CardGrid'

import type { CardState } from './cards'
import { translate } from './utils'

interface CardsByGroupProps {
  cards: CardState[]
  canBuy?: boolean
  canSell?: boolean
  showConflictTooltips?: boolean
  groupBy?: (card: CardState) => string
}

export default function CardsByGroup({
  cards, canBuy, canSell, showConflictTooltips, groupBy
}: CardsByGroupProps) {
  if (groupBy === undefined)
    return (
      <CardGrid
        cards={cards}
        canBuy={canBuy}
        canSell={canSell}
        showConflictTooltips={showConflictTooltips} />
    )

  // Ordered set of categories
  const groups: string[] = []

  for (let card of cards) {
    const group = groupBy(card)
    if (!groups.includes(group))
      groups.push(group)
  }

  return (
    <div>
      {groups.map(group =>
        <div key={group}>
          <Divider>{translate(group)}</Divider>
          <CardGrid
            cards={cards.filter(card => groupBy(card) === group)}
            canBuy={canBuy}
            canSell={canSell}
            showConflictTooltips={showConflictTooltips} />
        </div>
      )}
    </div>
  )
}
