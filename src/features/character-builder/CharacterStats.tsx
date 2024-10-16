import React from 'react'

import AbilityScore from './AbilityScore'
import SkillBonus from './SkillBonus'

import style from './CharacterBuilder.module.css'

export default function CharacterStats() {
  return (
    <div>
      <div className={style.abilityGrid}>
        <div>
          <AbilityScore
            ability='str'
            slot='str-score'/>
          <SkillBonus
            ability='str'
            skill='strSave'
            slot='str-save' />
          <SkillBonus
            ability='str'
            skill='athletics'
            slot='athletics-bonus' />
        </div>
        <div>
          <AbilityScore
            ability='dex'
            slot='dex-score' />
          <SkillBonus
            ability='dex'
            skill='dexSave'
            slot='dex-save' />
          <SkillBonus
            ability='dex'
            skill='acrobatics'
            slot='acrobatics-bonus' />
          <SkillBonus
            ability='dex'
            skill='sleightOfHand'
            slot='sleight-of-hand-bonus' />
          <SkillBonus
            ability='dex'
            skill='stealth'
            slot='stealth-bonus' />
        </div>
        <div>
          <AbilityScore
            ability='con'
            slot='con-score' />
          <SkillBonus
            ability='con'
            skill='conSave'
            slot='con-save' />
        </div>
        <div>
          <AbilityScore
            ability='int'
            slot='int-score' />
          <SkillBonus
            ability='int'
            skill='intSave'
            slot='int-save' />
          <SkillBonus
            ability='int'
            skill='arcana'
            slot='arcana-bonus' />
          <SkillBonus
            ability='int'
            skill='history'
            slot='history-bonus' />
          <SkillBonus
            ability='int'
            skill='investigation'
            slot='investigation-bonus' />
          <SkillBonus
            ability='int'
            skill='nature'
            slot='nature-bonus' />
          <SkillBonus
            ability='int'
            skill='religion'
            slot='religion-bonus' />
        </div>
        <div>
          <AbilityScore
            ability='wis'
            slot='wis-score' />
          <SkillBonus
            ability='wis'
            skill='wisSave'
            slot='wis-save' />
          <SkillBonus
            ability='wis'
            skill='animalHandling'
            slot='animal-handling-bonus' />
          <SkillBonus
            ability='wis'
            skill='insight'
            slot='insight-bonus' />
          <SkillBonus
            ability='wis'
            skill='medicine'
            slot='medicine-bonus' />
          <SkillBonus
            ability='wis'
            skill='perception'
            slot='perception-bonus' />
          <SkillBonus
            ability='wis'
            skill='survival'
            slot='survival-bonus' />
        </div>
        <div>
          <AbilityScore
            ability='cha'
            slot='cha-score' />
          <SkillBonus
            ability='cha'
            skill='chaSave'
            slot='cha-save' />
          <SkillBonus
            ability='cha'
            skill='deception'
            slot='deception-bonus' />
          <SkillBonus
            ability='cha'
            skill='intimidation'
            slot='intimidation-bonus' />
          <SkillBonus
            ability='cha'
            skill='performance'
            slot='performance-bonus' />
          <SkillBonus
            ability='cha'
            skill='persuasion'
            slot='persuasion-bonus' />
        </div>
      </div>
    </div>
  )
}
