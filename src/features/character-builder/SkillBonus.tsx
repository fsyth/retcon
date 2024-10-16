import React from 'react'

import SlotButton from './SlotButton'

import type { Ability, Save, Skill } from './character'
import type { Slot } from './cards'
import { formatModifier, modifier, translate } from './utils'
import { useAppSelector } from '../../app/hooks'
import { selectCharacter } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

interface SkillBonusProps {
  ability: Ability
  skill: Skill | Save
  slot: Slot
}

export default function SkillBonus({ ability, skill, slot }: SkillBonusProps) {
  const character = useAppSelector(selectCharacter)

  const score = character[ability]
  const bonus = character[skill] * character.prof

  const formattedMod = formatModifier(modifier(score) + bonus)
  const formattedName = translate(skill)

  return (
    <SlotButton filter={card => card.slot === slot}>
      <div className={style.skillBonus}>
        <span className={style.skill}>{formattedName}</span>
        <span className={style.bonus}>{formattedMod}</span>
      </div>
    </SlotButton>
  )
}
