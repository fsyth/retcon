import React, { useState } from 'react'
import { Input } from '@mui/joy'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectPointBudget, selectPointsSpent, setPointBudget } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

interface PointBudgetProps {
  sticky?: boolean
}

export default function PointBudget({sticky}: PointBudgetProps) {
  const dispatch = useAppDispatch()
  const pointBudget = useAppSelector(selectPointBudget)
  const pointsSpent = useAppSelector(selectPointsSpent)
  
  const [inputState, setInputState] = useState(pointBudget.toString())

  let className = style.pointBudget
  if (sticky)
    className += ` ${style.sticky}`

  return (
    <div className={className}>
      <Input
        type="number"
        startDecorator={`${pointsSpent} /`}
        endDecorator="RP"
        color={pointsSpent <= pointBudget ? 'success' : 'danger'}
        slotProps={{
          input: {
            value: inputState,
            min: 0,
            max: 999,
            step: 1,
          }
        }}
        onChange={e => {
          setInputState(e.target.value)
          const float = parseFloat(e.target.value)
          if (!isNaN(float))
            dispatch(setPointBudget(float))
        }}
        onBlur={() => {
          if (inputState === '') {
            setInputState('0')
            dispatch(setPointBudget(0))
          }
        }}
        sx={{
          '--Input-decoratorColor': 'inherit'
        }}
      />
    </div>
  )
}
