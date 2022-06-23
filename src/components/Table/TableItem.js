import { TableCell, TableRow} from '@mui/material'
import React from 'react'
import { TableStyle } from './Table.style'

const TableItem = ({row,handleOpen}) => {
  return (
  
    <TableRow
    onClick={handleOpen}
    key={row.id}
    sx={TableStyle.table_item}
  >
    <TableCell component="th" scope="row">
      {row.name}
    </TableCell>
    <TableCell align="left">{row.address}</TableCell>
  </TableRow>
  
  )
}

export default TableItem