import React from 'react'
import { Tooltip } from '@mui/joy'

import Card from './Card'

import type { Ability } from './character'
import type { Slot } from './cards'
import { formatModifier, modifier } from './utils'
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

  const formattedMod = formatModifier(modifier(score))

  return (
    <Tooltip
      title={cardForSlot !== undefined && <Card id={cardForSlot.id} canSell />}
      placement="right"
      arrow
      variant="outlined"
      disableHoverListener={cardForSlot === undefined}
    >
      <div className={style.abilityBox} onClick={() => onClick && onClick(slot)}>
        <p className={style.ability}>{ability}</p>
        <p className={style.modifier}>{formattedMod}</p>
        <p className={style.score}>{score}</p>
      </div>
    </Tooltip>
  )
}
