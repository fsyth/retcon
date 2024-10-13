import React, { useEffect, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, List, Sheet, Slider } from '@mui/joy'

import FilterToggle from './FilterToggle'

import type { CardState } from './cards'
import { translate } from './utils'
import { useAppSelector } from '../../app/hooks'
import { selectSelectedCards } from './characterBuilderSlice'

import style from './CharacterBuilder.module.css'

interface CardFiltersProps {
  onFiltersChanged: (filter: ((card: CardState) => boolean)) => void
}

export default function CardFilters({ onFiltersChanged }: CardFiltersProps
) {
  const selectedCards = useAppSelector(selectSelectedCards)

  const [priceRange, setPriceRange] = useState<[number, number]>([-7, 17])
  const [selections, setSelections] = useState<string[]>([])
  const [showBuy, setShowBuy] = useState(true)
  const [showReplace, setShowReplace] = useState(true)
  const [showSoldOut, setShowSoldOut] = useState(true)

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
  
  useEffect(() => {
    const userFilter = (card: CardState) => {
      const conflict = card.slot && selectedCards.find(c => c.slot === card.slot)
      const isSoldOut = card.copiesAvailable === 0
      const isReplace = !isSoldOut && conflict !== undefined
      const isBuy = !isSoldOut && !isReplace

      return (
        (priceRange[0] <= card.pointCost && card.pointCost <= priceRange[1]) &&
        (selections.length === 0 ||
          selections.includes(card.category) ||
          (card.slot !== undefined && selections.includes(card.slot))
        ) &&
        (
          (showBuy && isBuy) ||
          (showReplace && isReplace) ||
          (showSoldOut && isSoldOut)
        )
      )
    }

    onFiltersChanged(userFilter)  
  }, [priceRange, selections, showBuy, showReplace, showSoldOut, selectedCards, onFiltersChanged])

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
              min={-7}
              max={17}
              valueLabelDisplay="auto"
              marks={[
                { value: -7, label: '-7 RP' },
                { value: 0,  label: '0 RP'  },
                { value: 17, label: '17 RP' },
              ]}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </Sheet>
  )
}
