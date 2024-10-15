import React, { useEffect, useState } from 'react'
import { Divider, Input } from '@mui/joy'

import { formatModifier } from './utils'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectCharacter, setLevel } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

export default function CharacterLevel() {
  const dispatch = useAppDispatch()
  const { level, prof } = useAppSelector(selectCharacter)
  
  // Local state of the input is a string and not necessarily a valid number
  const [inputState, setInputState] = useState(level.toString())

  // Sync local state with redux state
  useEffect(() => {
    setInputState(level.toString())
  }, [level])

  return (
    <div className={style.characterLevel}>
      <Input
        type="number"
        startDecorator="Level"
        endDecorator={
          <>
            <Divider orientation="vertical" />
            <span>PB = {formatModifier(prof)}</span>
          </>
        }
        color="primary"
        slotProps={{
          input: {
            value: inputState,
            min: 1,
            max: 20,
            step: 1,
          }
        }}
        onChange={e => {
          setInputState(e.target.value)
          const int = parseInt(e.target.value)
          if (!isNaN(int))
            dispatch(setLevel(int))
        }}
        onBlur={() => setInputState(level.toString())}
        sx={{
          '--Input-decoratorBackgroundColor': '#e0e4e8',
        }}
      />
    </div>
  )
}
