import React from 'react'
import { List } from '@mui/joy'

import PointBudget from './PointBudget'
import CharacterLevel from './CharacterLevel'

import styles from './CharacterBuilder.module.css'

export default function AppHeader() {
  return (
    <header className={styles.appHeader}>
      <List orientation="horizontal">
        <h2>Retcon D&D</h2>
        <PointBudget />
        <CharacterLevel />
      </List>
    </header>
  )
}
