import React from 'react'
import Button from '@mui/material/Button';
import { ButtonStyle } from './Button.style';
const index = ({text,onClick,startIcon}) => {
  return (
    <Button variant="contained" color="error" onClick={onClick} startIcon={startIcon} sx={ButtonStyle.button}>{text}</Button>
  )
}

export default index
