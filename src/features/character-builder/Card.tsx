import React from 'react'
import { Button, Tooltip } from '@mui/joy'

import { getMissingRequirements } from './character'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { buyCard, sellCard, selectCardById, selectSelectedCards, selectCharacter } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

interface CardProps {
  id: string
  canBuy?: boolean
  canSell?: boolean
  showConflictTooltip?: boolean
}

export default function Card({ id, canBuy, canSell, showConflictTooltip }: CardProps) {
  const dispatch = useAppDispatch()

  const card = useAppSelector(selectCardById(id))
  const selectedCards = useAppSelector(selectSelectedCards)
  const character = useAppSelector(selectCharacter)
  
  if (card === undefined)
    return <div className="feature-card">Unknown card id: {id}</div>
  
  const { pointCost, flavor, description, copiesAvailable, slot, requires, addRequirements } = card

  if (canBuy && copiesAvailable <= 0)
    return (
      <div className={[style.featureCard, style.soldOut].join(' ')}>
        <Tooltip
          title={<Card id={id} canSell />}
          placement="top"
          arrow
          variant="outlined"
        >
          <span className={style.pointer}>Sold out!</span>
        </Tooltip>
      </div>
    )

  const conflict = canBuy && slot && selectedCards.find(sc => sc.slot === card.slot)

  const missingRequirements = (requires && addRequirements &&
    getMissingRequirements(character, requires, addRequirements)) || []

  // Ensure cards get automatically sold if their requirements were sold
  if (canSell && missingRequirements.length > 0)
    dispatch(sellCard(id))

  return (
    <div className={style.featureCard}>
      <p>
        <strong>{pointCost} RP</strong>
        {missingRequirements.length > 0 &&
          <Tooltip
            title={
              <>
                {missingRequirements.map(requiredId =>
                  <Card key={requiredId} id={requiredId} canBuy />
                )}
              </>
            }
            placement="top"
            arrow
            variant="outlined"
          >
            <span className={style.requires}>requires...</span>
          </Tooltip>
        }
        {canBuy && !conflict &&
          <Button
            color="success"
            variant="outlined"
            onClick={() => dispatch(buyCard(id))}
            disabled={copiesAvailable <= 0 || missingRequirements.length > 0}>Buy</Button>}
        {canBuy && conflict &&
          <Tooltip 
            title={<Card id={conflict.id} canSell />}
            placement="top"
            arrow
            variant="outlined"
            disableHoverListener={showConflictTooltip !== true}
          >
            <Button
              color="warning"
              variant="outlined"
              onClick={() => dispatch(buyCard(id))}
              disabled={copiesAvailable <= 0 || missingRequirements.length > 0}>Replace</Button>    
          </Tooltip>
        }
        {canSell &&
          <Button
            color="danger"
            variant="outlined"
            onClick={() => dispatch(sellCard(id))}>Sell</Button>
        }
      </p>
      <p><i>{flavor}</i></p>
      <p>{description}</p>
    </div>
  )
}
