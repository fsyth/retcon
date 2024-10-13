import React, { useState } from 'react'

import AbilityScore from './AbilityScore'
import SkillBonus from './SkillBonus'
import ModalShop from './ModalShop'

import type { Slot } from './cards'

import style from './CharacterBuilder.module.css'

export default function CharacterStats() {
  const [slotToShow, setSlotToShow] = useState<Slot | null>(null)

  const showCardsForSlot = (slot: Slot) => {
    if (slotToShow !== null)
      setSlotToShow(null)
    else
      setSlotToShow(slot)
  }

  return (
    <div>
      <div className={style.abilityGrid}>
        <div>
          <AbilityScore
            ability='str'
            slot='str-score'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='str'
            skill='strSave'
            slot='str-save'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='str'
            skill='athletics'
            slot='athletics-bonus'
            onClick={showCardsForSlot} />
        </div>
        <div>
          <AbilityScore
            ability='dex'
            slot='dex-score'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='dex'
            skill='dexSave'
            slot='dex-save'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='dex'
            skill='acrobatics'
            slot='acrobatics-bonus'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='dex'
            skill='sleightOfHand'
            slot='sleight-of-hand-bonus'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='dex'
            skill='stealth'
            slot='stealth-bonus'
            onClick={showCardsForSlot} />
        </div>
        <div>
          <AbilityScore
            ability='con'
            slot='con-score'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='con'
            skill='conSave'
            slot='con-save'
            onClick={showCardsForSlot} />
        </div>
        <div>
          <AbilityScore
            ability='int'
            slot='int-score'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='int'
            skill='intSave'
            slot='int-save'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='int'
            skill='arcana'
            slot='arcana-bonus'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='int'
            skill='history'
            slot='history-bonus'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='int'
            skill='investigation'
            slot='investigation-bonus'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='int'
            skill='nature'
            slot='nature-bonus'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='int'
            skill='religion'
            slot='religion-bonus'
            onClick={showCardsForSlot} />
        </div>
        <div>
          <AbilityScore
            ability='wis'
            slot='wis-score'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='wis'
            skill='wisSave'
            slot='wis-save'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='wis'
            skill='animalHandling'
            slot='animal-handling-bonus'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='wis'
            skill='insight'
            slot='insight-bonus'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='wis'
            skill='medicine'
            slot='medicine-bonus'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='wis'
            skill='perception'
            slot='perception-bonus'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='wis'
            skill='survival'
            slot='survival-bonus'
            onClick={showCardsForSlot} />
        </div>
        <div>
          <AbilityScore
            ability='cha'
            slot='cha-score'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='cha'
            skill='chaSave'
            slot='cha-save' 
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='cha'
            skill='deception'
            slot='deception-bonus'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='cha'
            skill='intimidation'
            slot='intimidation-bonus'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='cha'
            skill='performance'
            slot='performance-bonus'
            onClick={showCardsForSlot} />
          <SkillBonus
            ability='cha'
            skill='persuasion'
            slot='persuasion-bonus'
            onClick={showCardsForSlot} />
        </div>
      </div>
      <ModalShop
        open={slotToShow !== null}
        onClose={() => setSlotToShow(null)}
        filter={card => card.slot === slotToShow} />
    </div>
  )
}
