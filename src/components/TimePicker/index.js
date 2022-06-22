import { TextField } from '@mui/material'
import React from 'react'
import { TimePickerStyle } from './TimePicker.style'
const index = ({name,label,onChange,value,error}) => {
  return (
    <TextField 
    name={name}
    label={label}
    type="time"
    size="small"
    error={error}
    defaultValue={value}
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