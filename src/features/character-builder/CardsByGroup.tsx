import React from 'react'
import { Divider } from '@mui/joy'

import CardGrid from './CardGrid'

import type { CardState } from './cards'
import { translate } from './utils'

interface CardsByCategoryProps {
  cardsWithConflicts: [CardState, CardState?][]
  canBuy?: boolean
  canSell?: boolean
  showConflictTooltips?: boolean
  groupBy?: (card: CardState) => string
}

export default function CardsByGroup({
  cardsWithConflicts, canBuy, canSell, showConflictTooltips, groupBy
}: CardsByCategoryProps) {
  if (groupBy === undefined)
    return (
      <CardGrid
        cardsWithConflicts={cardsWithConflicts}
        canBuy={canBuy}
        canSell={canSell}
        showConflictTooltips={showConflictTooltips} />
    )

  // Ordered set of categories
  const groups: string[] = []

  for (let [card] of cardsWithConflicts) {
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
            cardsWithConflicts={cardsWithConflicts.filter(([card]) => groupBy(card) === group)}
            canBuy={canBuy}
            canSell={canSell}
            showConflictTooltips={showConflictTooltips} />
        </div>
      )}
    </div>
  )
}
