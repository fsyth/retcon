import React from 'react'
import { Button, Tooltip } from '@mui/joy'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { buyCard, sellCard, selectCardById, selectSelectedCards } from './characterBuilderSlice'

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
  
  if (card === undefined)
    return <div className="feature-card">Unknown card id: {id}</div>
  
  const { pointCost, flavor, description, copiesAvailable, slot } = card

  const conflict = canBuy && slot && selectedCards.find(sc => sc.slot === card.slot)

  return (
    <div className={style.featureCard}>
      <p>
        <strong>{pointCost} RP</strong>
        {canBuy && !conflict &&
          <Button
            color="success"
            variant="outlined"
            onClick={() => dispatch(buyCard(id))}
            disabled={copiesAvailable <= 0}>Buy</Button>}
        {canBuy && conflict &&
          <Tooltip 
            title={<Card id={conflict.id}/>}
            placement="top"
            arrow={true}
            disableHoverListener={showConflictTooltip !== true}
          >
            <Button
              color="warning"
            variant="outlined"
              onClick={() => dispatch(buyCard(id))}
              disabled={copiesAvailable <= 0}>Replace</Button>    
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
