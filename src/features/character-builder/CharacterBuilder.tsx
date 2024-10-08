import React from 'react'

import CharacterStats from './CharacterStats'
import CardInventory from './CardInventory'
import CardShop from './CardShop'
import PointBudget from './PointBudget'

import styles from './CharacterBuilder.module.css'

export default function CharacterBuilder() {
  return (
    <div className={styles.characterBuilder}>
      <h1>Retcon Character Builder</h1>
      <PointBudget />
      <CharacterStats />
      <CardInventory />
      <CardShop />
    </div>
  )
}
