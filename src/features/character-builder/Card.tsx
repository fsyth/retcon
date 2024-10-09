import React from 'react'
import { Button, Tooltip } from '@mui/joy'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectCardById, buyCard, sellCard } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

interface CardProps {
  id: string
  canBuy?: boolean
  canSell?: boolean
  conflict?: string
  showConflictTooltip?: boolean
}

export default function Card({ id, canBuy, canSell, conflict, showConflictTooltip }: CardProps) {
  const dispatch = useAppDispatch()

  const card = useAppSelector(selectCardById(id))

  if (card === undefined)
    return <div className="feature-card">Unknown card id: {id}</div>

  const { pointCost, flavor, description, copiesAvailable } = card

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
            title={<Card id={conflict}/>}
            placement="top"
            arrow={true}
            disableHoverListener={showConflictTooltip === false}
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
