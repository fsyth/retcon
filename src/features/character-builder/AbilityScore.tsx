import React from 'react'

import SlotButton from './SlotButton'

import type { Ability } from './character'
import type { Slot } from './cards'
import { formatModifier, modifier } from './utils'
import { useAppSelector } from '../../app/hooks'
import { selectCharacter } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

interface AbilityScoreProps {
  ability: Ability
  slot: Slot
}

export default function AbilityScore({ ability, slot }: AbilityScoreProps) {
  const character = useAppSelector(selectCharacter)

  const score = character[ability]
  const formattedMod = formatModifier(modifier(score))

  return (
    <SlotButton filter={card => card.slot === slot}>
      <div className={style.abilityBox}>
        <p className={style.ability}>{ability}</p>
        <p className={style.modifier}>{formattedMod}</p>
        <p className={style.score}>{score}</p>
      </div>
    </SlotButton>
  )
}
