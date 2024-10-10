import React from 'react'
import { Sheet } from '@mui/joy'

import CharacterStats from './CharacterStats'
import ArmorClass from './ArmorClass'

import style from './CharacterBuilder.module.css'

export default function CharacterSheet() {
  return (
    <Sheet>
      <CharacterStats />
      <div className={style.centered}>
        <ArmorClass />
      </div>
    </Sheet>
  )
}
