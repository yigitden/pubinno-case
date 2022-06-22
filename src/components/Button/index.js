import React from 'react'
import Button from '@mui/material/Button';
import { ButtonStyle } from './Button.style';
const index = ({text,onClick,startIcon,color}) => {
  return (
    <Button variant="contained" color={color} onClick={onClick} startIcon={startIcon} sx={ButtonStyle.button}>{text}</Button>
  )
}

export default index
