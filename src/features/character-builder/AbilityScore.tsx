import React from 'react'
import { Tooltip } from '@mui/joy'

import Card from './Card'

import type { Ability } from './character'
import type { Slot } from './cards'
import { useAppSelector } from '../../app/hooks'
import { selectCharacter, selectSelectedCards } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

interface AbilityScoreProps {
  ability: Ability
  slot: Slot
  onClick?: (slot: Slot) => void
}

export default function AbilityScore({ ability, slot, onClick }: AbilityScoreProps) {
  const character = useAppSelector(selectCharacter)
  const score = character[ability]

  const selectedCards = useAppSelector(selectSelectedCards)
  const cardForSlot = selectedCards.find(card => card.slot === slot)

  const modifier = Math.floor((score - 10) / 2)
  const formattedModifier =
    new Intl.NumberFormat('en-US', {signDisplay: 'always'}).format(modifier)

  return (
    <Tooltip
      title={cardForSlot !== undefined && <Card id={cardForSlot.id} />}
      placement="bottom"
      arrow
      disableHoverListener={cardForSlot === undefined}
    >
      <div className={style.abilityScore} onClick={() => onClick && onClick(slot)}>
        <p className={style.ability}>{ability}</p>
        <p className={style.modifier}>{formattedModifier}</p>
        <p className={style.score}>{score}</p>
      </div>
    </Tooltip>
  )
}
