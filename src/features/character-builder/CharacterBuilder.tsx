import React from 'react'

import PointBudget from './PointBudget'
import CharacterSheet from './CharacterSheet'
import CardInventory from './CardInventory'
import CardShop from './CardShop'

import styles from './CharacterBuilder.module.css'

export default function CharacterBuilder() {
  return (
    <div className={styles.characterBuilder}>
      <h1>Retcon Character Builder</h1>
      <PointBudget sticky/>
      <CharacterSheet />
      <CardInventory />
      <CardShop groupBy={card => card.category} userFilters showConflictTooltips/>
    </div>
  )
}
