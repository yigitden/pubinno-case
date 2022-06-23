import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { TableStyle } from "./Table.style";

const TableItem = ({ row, handleOpen }) => {
  function truncateString(str, num) {
    //truncate function for long address
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <TableRow onClick={handleOpen} key={row.id} sx={TableStyle.table_item}>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="left">{truncateString(`${row.address}`, 70)}</TableCell>
    </TableRow>
  );
};

export default TableItem;
