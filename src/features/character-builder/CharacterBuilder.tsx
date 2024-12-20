import React, { useEffect, useState } from 'react'

import AppHeader from './AppHeader'
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
    <>
      <AppHeader />
      <div className={styles.characterBuilder}>
        <CharacterSheet />
        <CardInventory />
        <CardShop groupBy={card => card.category} userFilters showConflictTooltips/>
      </div>
    </>
  )
}
