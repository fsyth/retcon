import React from 'react'
import { Sheet } from '@mui/joy'

import CharacterBuilder from './features/character-builder/CharacterBuilder'

import './App.css'

export default function App() {
  return (
    <div className="App">
      <Sheet>
        <CharacterBuilder />
      </Sheet>
    </div>
  )
}
