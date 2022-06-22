import { TextField } from '@mui/material'
import React from 'react'
import { TimePickerStyle } from './TimePicker.style'
const index = ({name,label,onChange}) => {
  return (
    <TextField 
    name={name}
    label={label}
    type="time"
    size="small"
    onChange={onChange}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300,
    }}
    sx={TimePickerStyle.style}
  />
  )
}

export default index