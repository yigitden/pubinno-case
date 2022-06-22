import { TextField } from '@mui/material'
import React from 'react'
 
const index = ({name,label,placeholder,onChange,value}) => {
  return (
    <TextField
    required
    fullWidth
    multiline
    name={name}
    label={label}
    placeholder={placeholder}
    size="small"
    id="filled-textarea-name"
    variant="outlined"
    onChange={onChange}
    defaultValue={value}
  />
  )
}

export default index