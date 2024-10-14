import React, { useEffect, useState } from 'react'

import PointBudget from './PointBudget'
import CharacterSheet from './CharacterSheet'
import CardInventory from './CardInventory'
import CardShop from './CardShop'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { decodeStateFromUri, selectEncodedUri } from './characterBuilderSlice'

import styles from './CharacterBuilder.module.css'

export default function CharacterBuilder() {
  const dispatch = useAppDispatch()
  const uri = useAppSelector(selectEncodedUri)

  const [isLoaded, setIsLoaded] = useState(false)

  // Read URI on first load
  useEffect(() => {
    const href = window.location.href
    const uri = href.slice(href.lastIndexOf('/') + 1)
    dispatch(decodeStateFromUri(uri))
    setIsLoaded(true)
  }, [dispatch, setIsLoaded])

  // Write URI on state change
  useEffect(() => {
    if (isLoaded)
      window.history.replaceState(null, '', uri)
  }, [uri, isLoaded])

  return (
    <div className={styles.characterBuilder}>
      <h1>Retcon Character Builder</h1>
      <PointBudget sticky />
      <CharacterSheet />
      <CardInventory />
      <CardShop groupBy={card => card.category} userFilters showConflictTooltips/>
    </div>
  )
}
