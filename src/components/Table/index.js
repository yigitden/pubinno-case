import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useState } from "react";
import Pagination from "../Pagination";
import Edit from "../Edit";
import { TableStyle } from "./Table.style";

const TableComp = ({ data, getAllData, query }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const dataForPagination = () => {
    if (query === "") {
      return data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    } else {
      return data
        .filter((value) => {
          return value.name.toLowerCase().includes(query.toLowerCase());
        })
        .slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    }
  };
  return (
    <>
      <TableContainer sx={TableStyle.container} component={Paper}>
        <Table
          sx={TableStyle.table_header}
          stickyHeader
          aria-label="sticky table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={TableStyle.table_cell}>NAME</TableCell>
              <TableCell sx={TableStyle.table_cell}>ADDRESS</TableCell>
            </TableRow>
          </TableHead>

          {dataForPagination() &&
            dataForPagination().map((row) => (
              <TableBody>
                <Edit row={row} getAllData={getAllData} />
              </TableBody>
            ))}
        </Table>
      </TableContainer>
      <Pagination
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
      />
    </>
  );
};

export default TableComp;
