import React from 'react'
import { Container } from 'react-bootstrap';

import CharacterBuilder from './features/character-builder/CharacterBuilder'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <Container fluid="m">
        <CharacterBuilder />
      </Container>
    </div>
  )
}
