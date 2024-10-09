import React from 'react'
import { Tooltip } from '@mui/joy'

import Card from './Card'

import type { Ability, Save, Skill } from './character'
import type { Slot } from './cards'
import { useAppSelector } from '../../app/hooks'
import { selectCharacter, selectSelectedCards } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

const translate = {
  strSave: 'Save',
  dexSave: 'Save',
  conSave: 'Save',
  intSave: 'Save',
  wisSave: 'Save',
  chaSave: 'Save',
  acrobatics: 'Acrobatics',
  animalHandling: 'Animal handling',
  arcana: 'Arcana',
  athletics: 'Athletics',
  deception: 'Deception',
  history: 'History',
  insight: 'Insight',
  intimidation: 'Intimidation',
  investigation: 'Investigation',
  medicine: 'Medicine',
  nature: 'Nature',
  perception: 'Perception',
  performance: 'Performance',
  persuasion: 'Persuasion',
  religion: 'Religion',
  sleightOfHand: 'Sleight of hand',
  stealth: 'Stealth',
  survival: 'Survival',
}

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

  const modifier = Math.floor((score - 10) / 2) + bonus
  const formattedModifier =
    new Intl.NumberFormat('en-US', {signDisplay: 'always'}).format(modifier)

  const formattedName = translate[skill]

  return (
    <Tooltip
      title={cardForSlot !== undefined && <Card id={cardForSlot.id} />}
      placement="right"
      arrow
      disableHoverListener={cardForSlot === undefined}
    >
      <div className={style.skillBonus} onClick={() => onClick && onClick(slot)}>
        <span className={style.skill}>{formattedName}</span>
        <span className={style.bonus}>{formattedModifier}</span>
      </div>
    </Tooltip>
  )
}
