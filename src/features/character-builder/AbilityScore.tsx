import React from 'react'

import type { Ability } from './character'

import style from './CharacterBuilder.module.css'
import { useAppSelector } from '../../app/hooks'
import { selectSelectedCards } from './characterBuilderSlice'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import Card from './Card'

interface AbilityScoreProps {
  ability: Ability
  score: number
  onClick?: () => void
}

export default function AbilityScore({ ability, score, onClick }: AbilityScoreProps) {
  const selectedCards = useAppSelector(selectSelectedCards)
  const slotName = `${ability}-score`
  const cardForSlot = selectedCards.find(card => card.slot === slotName)

  const modifier = Math.floor((score - 10) / 2)
  const formattedModifier =
    new Intl.NumberFormat('en-US', {signDisplay: 'always'}).format(modifier)

  return (
    <OverlayTrigger
      show={cardForSlot === undefined ? false : undefined}
      placement='bottom'
      overlay={props =>
        <Tooltip {...props}>
          {cardForSlot !== undefined &&
            <Card id={cardForSlot.id}/>
          }
        </Tooltip>
      }
    >
      <div className={style.abilityScore} onClick={onClick}>
        <p className={style.ability}>{ability}</p>
        <p className={style.modifier}>{formattedModifier}</p>
        <p className={style.score}>{score}</p>
      </div>
    </OverlayTrigger>
  )
}
