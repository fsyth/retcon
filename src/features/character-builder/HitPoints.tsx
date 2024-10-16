import React from 'react'

import SlotButton from './SlotButton'

import { modifier } from './utils'
import { useAppSelector } from '../../app/hooks'
import { selectCharacter } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

export default function HitPoints() {
  const character = useAppSelector(selectCharacter)

  const { level, hitDie, con } = character
  const hp = Math.max(level, level * (Math.ceil((hitDie + 1) / 2) + modifier(con)))

  return (
    <SlotButton filter={card => card.category === 'hit-points'}>
      <div className={style.abilityBox}>
        <p className={style.ability}>HP</p>
        <p className={style.modifier}>{hp}</p>
        <p className={style.score}>{level}d{hitDie}</p>
      </div>
    </SlotButton>
  )
}
