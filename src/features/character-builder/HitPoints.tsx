import React, { useState } from 'react'
import { Tooltip } from '@mui/joy'

import Card from './Card'
import ModalShop from './ModalShop'

import { type CardState } from './cards'
import { modifier } from './utils'
import { useAppSelector } from '../../app/hooks'
import { selectCharacter, selectSelectedCards } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

export default function HitPoints() {
  const [showModal, setShowModal] = useState(false)

  const character = useAppSelector(selectCharacter)
  const selectedCards = useAppSelector(selectSelectedCards)

  const filter = (card: CardState) => card.category === 'hit-points'
  const cardsForCategory = selectedCards.filter(filter)

  const { level, hitDie, con } = character

  const hp = Math.max(level, level * (Math.ceil((hitDie + 1) / 2) + modifier(con)))

  return (
    <div>
      <Tooltip
        title={
          cardsForCategory.length > 0 &&
          cardsForCategory.map(card =>
            <Card key={card.id} id={card.id} canSell />
          )
        }
        placement="right"
        arrow
        variant="outlined"
      >
        <div className={style.abilityBox} onClick={() => setShowModal(true)}>
          <p className={style.ability}>HP</p>
          <p className={style.modifier}>{hp}</p>
          <p className={style.score}>{level}d{hitDie}</p>
        </div>
      </Tooltip>
      <ModalShop
        open={showModal}
        onClose={() => setShowModal(false)}
        filter={filter} />
    </div>
  )
}
