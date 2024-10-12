import React from 'react'
import { Tooltip } from '@mui/joy'

import Card from './Card'

import type { Ability, Save, Skill } from './character'
import type { Slot } from './cards'
import { formatModifier, modifier, translate } from './utils'
import { useAppSelector } from '../../app/hooks'
import { selectCharacter, selectSelectedCards } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

interface SkillBonusProps {
  ability: Ability
  skill: Skill | Save
  slot: Slot
  onClick?: (slot: Slot) => void
}

export default function SkillBonus({ ability, skill, slot, onClick }: SkillBonusProps) {
  const character = useAppSelector(selectCharacter)
  const score = character[ability]
  const bonus = character[skill]

  const selectedCards = useAppSelector(selectSelectedCards)
  const slotName = skill.endsWith('Save') ? `${ability}-save` : `${skill}-bonus`
  const cardForSlot = selectedCards.find(card => card.slot === slotName)

  const mod = modifier(score) + bonus
  const formattedMod = formatModifier(mod)

  const formattedName = translate(skill)

  return (
    <Tooltip
      title={cardForSlot !== undefined && <Card id={cardForSlot.id} canSell />}
      placement="right"
      arrow
      variant="outlined"
    >
      <div className={style.skillBonus} onClick={() => onClick && onClick(slot)}>
        <span className={style.skill}>{formattedName}</span>
        <span className={style.bonus}>{formattedMod}</span>
      </div>
    </Tooltip>
  )
}
