import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, List, ListItem, Sheet, Slider } from '@mui/joy'

import style from './CharacterBuilder.module.css'

interface CardFiltersProps {
  selections: string[]
  setSelections: (selections: string[]) => void
  priceRange: [number, number]
  setPriceRange: (priceRange: [number, number]) => void
}

export default function CardFilters({
  selections, setSelections, priceRange, setPriceRange}: CardFiltersProps
) {
  const options = [
    [
      ['ability-score', 'Ability score'],
      ['str-score', 'Strength'],
      ['dex-score', 'Dexterity'],
      ['con-score', 'Constitution'],
      ['int-score', 'Intelligence'],
      ['wis-score', 'Wisdom'],
      ['cha-score', 'Charisma'],
      ['saving-throw', 'Saving throw'],
    ],
    [
      ['skill', 'Skill'],
      ['expertise', 'Expertise'],
      ['acrobatics-bonus', 'Acrobatics'],
      ['animal-handling-bonus', 'Animal handling'],
      ['arcana-bonus', 'Arcana'],
      ['athletics-bonus', 'Athletics'],
      ['deception-bonus', 'Deception'],
      ['history-bonus', 'History'],
      ['insight-bonus', 'Insight'],
      ['intimidation-bonus', 'Intimidation'],
      ['investigation-bonus', 'Investigation'],
      ['medicine-bonus', 'Medicine'],
      ['nature-bonus', 'Nature'],
      ['perception-bonus', 'Perception'],
      ['performance-bonus', 'Performance'],
      ['persuasion-bonus', 'Persuasion'],
      ['religion-bonus', 'Religion'],
      ['sleight-of-hand-bonus', 'Sleight of hand'],
      ['stealth-bonus', 'Stealth'],
      ['survival-bonus', 'Survival'],
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
                {section.map(([option, optionLabel]) =>
                  <ListItem key={option} sx={{ margin: '0.2rem' }}>
                    <Checkbox
                      overlay
                      disableIcon
                      label={optionLabel}
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
