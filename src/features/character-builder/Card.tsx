import React from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'

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
            variant="success"
            onClick={() => dispatch(buyCard(id))}
            disabled={copiesAvailable <= 0}>Buy</Button>}
        {canBuy && conflict &&
          <OverlayTrigger
           show={showConflictTooltip}
            overlay={props =>
              <Tooltip {...props}>
                <Card id={conflict}/>
              </Tooltip>
            }
          >
            <Button
              variant="warning"
              onClick={() => dispatch(buyCard(id))}
              disabled={copiesAvailable <= 0}>Replace</Button>    
          </OverlayTrigger>
        }
        {canSell &&
          <Button
            variant="danger"
            onClick={() => dispatch(sellCard(id))}>Sell</Button>
        }
      </p>
      <p><i>{flavor}</i></p>
      <p>{description}</p>
    </div>
  )
}
