import { TableCell, TableRow,TableBody } from '@mui/material'
import React from 'react'

const TableItem = ({row,handleOpen}) => {
  return (
  
    <TableRow
    onClick={handleOpen}
    key={row.id}
    sx={{
      "&:last-child td, &:last-child th": { border: 0 },
      cursor: "pointer",
    }}
  >
    <TableCell component="th" scope="row">
      {row.name}
    </TableCell>
    <TableCell align="left">{row.address}</TableCell>
  </TableRow>
  
  )
}

export default TableItem