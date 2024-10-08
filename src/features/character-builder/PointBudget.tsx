import React, { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectPointBudget, selectPointsSpent, setPointBudget } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

export default function PointBudget() {
  const dispatch = useAppDispatch()
  const pointBudget = useAppSelector(selectPointBudget)
  const pointsSpent = useAppSelector(selectPointsSpent)
  
  const [inputState, setInputState] = useState(pointBudget.toString())

  const validityClass = pointsSpent <= pointBudget ? 'is-valid' : 'is-invalid'

  return (
    <div className={style.pointBudget}>
      <InputGroup>
        <InputGroup.Text>{pointsSpent} RP /</InputGroup.Text>
        <Form.Control
          className={validityClass}
          type="number"
          value={inputState}
          min={0}
          step={1}
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
        />
      </InputGroup>
    </div>
  )
}
