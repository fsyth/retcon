import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import AbilityScore from './AbilityScore'
import CardInventory from './CardInventory'
import CardShop from './CardShop'

import { useAppSelector } from '../../app/hooks'
import { Slot } from './cards'
import { selectCharacter } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

export default function CharacterStats() {
  const [slotToShow, setSlotToShow] = useState<Slot | null>(null)
  
  const character = useAppSelector(selectCharacter)

  const { str, dex, con, int, wis, cha } = character

  const showCardsForSlot = (mutuallyExclusive: Slot) => {
    if (slotToShow !== null)
      setSlotToShow(null)
    else
      setSlotToShow(mutuallyExclusive)
  }

  return (
    <div>
      <div className={style.abilityScores}>
        <AbilityScore ability='str' score={str} onClick={() => showCardsForSlot('str-score')} />
        <AbilityScore ability='dex' score={dex} onClick={() => showCardsForSlot('dex-score')} />
        <AbilityScore ability='con' score={con} onClick={() => showCardsForSlot('con-score')} />
        <AbilityScore ability='int' score={int} onClick={() => showCardsForSlot('int-score')} />
        <AbilityScore ability='wis' score={wis} onClick={() => showCardsForSlot('wis-score')} />
        <AbilityScore ability='cha' score={cha} onClick={() => showCardsForSlot('cha-score')} />
      </div>
      <Modal show={slotToShow !== null} onHide={() => setSlotToShow(null)}>
        <CardInventory
          filter={card => card.slot === slotToShow}
        />
        <CardShop
          filter={card => card.slot === slotToShow}
          showConflictTooltips={false}
        />
      </Modal>
    </div>
  )
}
