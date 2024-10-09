import React from 'react'
import { Tooltip } from '@mui/joy'

import Card from './Card'

import type { Ability } from './character'
import { useAppSelector } from '../../app/hooks'
import { selectSelectedCards } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

interface AbilityScoreProps {
  ability: Ability
  score: number
  onClick?: () => void
}

export default function AbilityScore({ ability, score, onClick }: AbilityScoreProps) {
  const selectedCards = useAppSelector(selectSelectedCards)
  const slotName = `${ability}-score`
  const cardForSlot = selectedCards.find(card => card.slot === slotName)

  const modifier = Math.floor((score - 10) / 2)
  const formattedModifier =
    new Intl.NumberFormat('en-US', {signDisplay: 'always'}).format(modifier)

  return (
    <Tooltip
      title={cardForSlot !== undefined && <Card id={cardForSlot.id} />}
      placement="bottom"
      arrow={true}
      disableHoverListener={cardForSlot === undefined}
    >
      <div className={style.abilityScore} onClick={onClick}>
        <p className={style.ability}>{ability}</p>
        <p className={style.modifier}>{formattedModifier}</p>
        <p className={style.score}>{score}</p>
      </div>
    </Tooltip>
  )
}
