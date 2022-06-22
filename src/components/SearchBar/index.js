import { TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const index = () => {
  return (
    <TextField
    id="outlined-textarea" 
    placeholder="Search..."
    multiline
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
  )
}

export default index