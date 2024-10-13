import React, { useState } from 'react'
import { Button, Modal, ModalDialog, Textarea } from '@mui/joy'

import { useAppSelector } from '../../app/hooks'
import { selectPointBudget, selectSelectedCards } from './characterBuilderSlice'

export default function LoadSave() {
  const [showModal, setShowModal] = useState(false)

  const pointBudget = useAppSelector(selectPointBudget)
  const selectedCards = useAppSelector(selectSelectedCards)

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Load/Save</Button>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <ModalDialog>
          <Textarea
            defaultValue={JSON.stringify({
              pointBudget,
              selections: selectedCards.map(card => card.id),
            })} />
        </ModalDialog>
      </Modal>
    </>
  )
}
