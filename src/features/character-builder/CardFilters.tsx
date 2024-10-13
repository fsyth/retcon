import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, List, Sheet, Slider } from '@mui/joy'

import FilterToggle from './FilterToggle'

import { translate } from './utils'

import style from './CharacterBuilder.module.css'

interface CardFiltersProps {
  priceRange: [number, number]
  setPriceRange: (priceRange: [number, number]) => void
  selections: string[]
  setSelections: (selections: string[]) => void
  showBuy: boolean
  setShowBuy: (showBuy: boolean) => void
  showReplace: boolean
  setShowReplace: (showReplace: boolean) => void
  showSoldOut: boolean
  setShowSoldOut: (showSoldOut: boolean) => void
}

export default function CardFilters({
  priceRange, setPriceRange,
  selections, setSelections,
  showBuy, setShowBuy,
  showReplace, setShowReplace,
  showSoldOut, setShowSoldOut,
}: CardFiltersProps
) {
  const options = [
    [
      'ability-score',
      'saving-throw',
      'skill',
      'expertise',
      'weapons',
      'armor',
    ]
  ]

  return (
    <Sheet className={style.rounded} variant="outlined">
      <Accordion sx={{ borderBottomWidth: 0 }}>
        <AccordionSummary>Filters</AccordionSummary>
        <AccordionDetails>
          <List>
            {options.map((section, index) =>
              <List key={index} orientation="horizontal" wrap>
                {section.map((option) =>
                  <FilterToggle
                    key={option}
                    label={translate(option)}
                    checked={selections.includes(option)}
                    onChange={e =>
                      setSelections(e.target.checked
                        ? [...selections, option]
                        : selections.filter(item => item !== option)
                      )
                    } />
                )}
              </List>
            )}
            <List orientation="horizontal" wrap>
              <FilterToggle
                label="Buy"
                checked={showBuy}
                onChange={() => setShowBuy(!showBuy)} />
              <FilterToggle
                label="Replace"
                checked={showReplace}
                onChange={() => setShowReplace(!showReplace)} />
              <FilterToggle
                label="Sold Out"
                checked={showSoldOut}
                onChange={() => setShowSoldOut(!showSoldOut)} />
            </List>
          </List>
          <div style={{ margin: '1.2rem 1.5rem 1rem 1.5rem' }}>
            <Slider
              value={priceRange}
              onChange={(_, newValue) => setPriceRange(newValue as [number, number])}
              step={1}
              min={-24}
              max={24}
              valueLabelDisplay="auto"
              marks={[
                { value: -24, label: '-24 RP' },
                { value: 0,  label: '0 RP'  },
                { value: 24, label: '24 RP' },
              ]}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </Sheet>
  )
}
