import React from 'react'
import { Modal, ModalDialog } from '@mui/joy'

import PointBudget from './PointBudget'
import CardInventory from './CardInventory'
import CardShop from './CardShop'

import type { CardState } from './cards'

import style from './CharacterBuilder.module.css'

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
        <div className={style.modalShop}>
          <PointBudget />
          <CardInventory filter={filter} />
          <CardShop filter={filter} groupBy={groupBy} />
        </div>
      </ModalDialog>
    </Modal>
  )
}
