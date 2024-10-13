import React, { ChangeEventHandler, ReactNode } from 'react'
import { Checkbox, ListItem } from '@mui/joy'

interface FilterToggleProps {
  label: ReactNode
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function FilterToggle({ label, checked, onChange }: FilterToggleProps) {
  return (
    <ListItem sx={{ margin: '0.2rem' }}>
      <Checkbox
        overlay
        disableIcon
        label={label}
        checked={checked}
        variant="soft"
        onChange={onChange}
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
  )
}
