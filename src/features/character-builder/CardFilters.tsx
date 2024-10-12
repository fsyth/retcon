import React, { useEffect, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, List, ListItem, Sheet, Slider } from '@mui/joy'

import type { CardState } from './cards'
import { translate } from './utils'

import style from './CharacterBuilder.module.css'

interface CardFiltersProps {
  onFiltersChanged: (filter: ((card: CardState) => boolean)) => void
}

export default function CardFilters({ onFiltersChanged }: CardFiltersProps
) {
  const [priceRange, setPriceRange] = useState<[number, number]>([-7, 17])
  const [selections, setSelections] = useState<string[]>([])

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
    const userFilter = (card: CardState) =>
      (priceRange[0] <= card.pointCost && card.pointCost <= priceRange[1]) &&
      (selections.length === 0 ||
        selections.includes(card.category) ||
        (card.slot !== undefined && selections.includes(card.slot))
      )

    onFiltersChanged(userFilter)  
  }, [priceRange, selections, onFiltersChanged])

  return (
    <Sheet className={style.rounded} variant="outlined">
      <Accordion sx={{ borderBottomWidth: 0 }}>
        <AccordionSummary>Filters</AccordionSummary>
        <AccordionDetails>
          <List>
            {options.map((section, index) =>
              <List key={index} orientation="horizontal" wrap>
                {section.map((option) =>
                  <ListItem key={option} sx={{ margin: '0.2rem' }}>
                    <Checkbox
                      overlay
                      disableIcon
                      label={translate(option)}
                      checked={selections.includes(option)}
                      variant="soft"
                      onChange={e =>
                        setSelections(
                          e.target.checked
                            ? [...selections, option]
                            : selections.filter(item => item !== option)
                        )
                      }
                      slotProps={{
                        action: ({ checked }) => ({
                          sx: checked
                            ? {
                                border: '1px solid',
                                borderColor: 'primary.500',
                              }
                            : {},
                        }),
                      }}
                    />
                  </ListItem>
                )}
              </List>
            )}
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
