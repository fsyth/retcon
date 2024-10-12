import React, { useState } from 'react'
import { Tooltip } from '@mui/joy'
import { RadioButtonChecked, RadioButtonUnchecked, ShieldOutlined } from '@mui/icons-material'

import Card from './Card'
import ModalShop from './ModalShop'

import { modifier } from './utils'
import { useAppSelector } from '../../app/hooks'
import { selectCharacter, selectSelectedCards } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

export function ShieldChecked() {
  return (
    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-20bmp1-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
    </svg>
  )
}

export default function ArmorClass() {
  const [showModal, setShowModal] = useState(false)

  const character = useAppSelector(selectCharacter)

  const selectedCards = useAppSelector(selectSelectedCards)
  const cardsForCategory = selectedCards.filter(card => card.category === 'armor')

  const {
    dex, con, wis, baseArmorClass, armorMaxDexBonus,
    armorAddCon, armorAddWis, armorProf, shieldProf
  } = character

  const ac =
    baseArmorClass +
    Math.min(modifier(dex), armorMaxDexBonus) +
    (armorAddCon ? modifier(con) : 0) +
    (armorAddWis ? modifier(wis) : 0)

  const armorPips = armorProf as number

  return (
    <div>
      <Tooltip
        title={
          cardsForCategory.map(card =>
            <Card key={card.id} id={card.id} canSell />
          )
        }
        placement="right"
        arrow
        variant="outlined"
        disableHoverListener={cardsForCategory.length === 0}
      >
        <div className={style.abilityBox} onClick={() => setShowModal(true)}>
          <p className={style.ability}>AC</p>
          <p className={style.modifier}>{ac}</p>
          <p className={style.pips}>
            {armorPips > 0 ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
            {armorPips > 1 ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
            {armorPips > 2 ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
          </p>
          <p className={style.pips}>
            {shieldProf ? <ShieldChecked /> : <ShieldOutlined /> }
          </p>
        </div>
      </Tooltip>
      <ModalShop
        open={showModal}
        onClose={() => setShowModal(false)}
        filter={card => ['armor', 'equipped-armor'].includes(card.category)}
        groupBy={card => card.slot || 'misc'} />
    </div>
  )
}

