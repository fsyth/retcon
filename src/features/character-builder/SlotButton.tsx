import React, { useState } from 'react'
import { Tooltip } from '@mui/joy'

import Card from './Card'
import ModalShop from './ModalShop'

import type { CardState } from './cards'
import { useAppSelector } from '../../app/hooks'
import { selectSelectedCards } from './characterBuilderSlice'

interface SlotButtonProps {
  filter: (card: CardState) => boolean
  children?: React.ReactNode
}

export default function SlotButton({ filter, children }: SlotButtonProps) {
  const [showModal, setShowModal] = useState(false)

  const selectedCards = useAppSelector(selectSelectedCards)
  const cardsForCategory = selectedCards.filter(filter)

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
        <div onClick={() => setShowModal(true)}>
          {children}
        </div>
      </Tooltip>
      <ModalShop
        open={showModal}
        onClose={() => setShowModal(false)}
        filter={filter}
        groupBy={card => card.slot || 'misc'} />
    </div>
  )
}
