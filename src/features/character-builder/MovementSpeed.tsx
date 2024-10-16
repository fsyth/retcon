import React from 'react'
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material'

import SlotButton from './SlotButton'

import { useAppSelector } from '../../app/hooks'
import { selectCharacter } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

export default function MovementSpeed() {
  const character = useAppSelector(selectCharacter)

  const { speed, canSwim, canClimb, canFly } = character

  return (
    <SlotButton filter={card => card.category === 'movement'}>
      <div className={style.abilityBox}>
        <p className={style.ability}>Speed</p>
        <p className={style.modifier}>{speed}&prime;</p>
        <p className={style.pips}>
          {canSwim  ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
          {canClimb ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
          {canFly   ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
        </p>
        <p className={style.pips}>&nbsp;</p>
      </div>
    </SlotButton>
  )
}
