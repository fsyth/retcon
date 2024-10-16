import React from 'react'
import { Sheet } from '@mui/joy'

import CharacterStats from './CharacterStats'
import MovementSpeed from './MovementSpeed'
import HitPoints from './HitPoints'
import ArmorClass from './ArmorClass'

import style from './CharacterBuilder.module.css'

export default function CharacterSheet() {
  return (
    <Sheet sx={{marginRight: '2rem'}}>
      <CharacterStats />
      <div className={style.abilityGrid}>
        <MovementSpeed />
        <HitPoints />
        <ArmorClass />
      </div>
    </Sheet>
  )
}
