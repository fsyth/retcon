import React from 'react'
import { Modal, ModalDialog } from '@mui/joy'

import PointBudget from './PointBudget'
import CardInventory from './CardInventory'
import CardShop from './CardShop'

import style from './CharacterBuilder.module.css'
import { CardState } from './cards'

interface ModalShopProps {
  open: boolean
  onClose: () => void
  filter?: (card: CardState) => boolean
  groupBy?: (card: CardState) => string
}

export default function ModalShop({ open, onClose, filter, groupBy }: ModalShopProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog>
        <div className={style.scrollable}>
          <PointBudget />
          <CardInventory filter={filter} />
          <CardShop filter={filter} groupBy={groupBy} />
        </div>
      </ModalDialog>
    </Modal>
  )
}
