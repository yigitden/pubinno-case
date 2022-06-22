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
import TableItem from '../Table/TableItem'

const TableComp = ({ data,getAllData }) => {
 
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
    return data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  return (
    <>
      <TableContainer sx={{ maxHeight: 440 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell >ADDRESS</TableCell>
            </TableRow>
          </TableHead>
          
            {dataForPagination().map((row) => (
                 <TableBody>
                  <Edit row={row} getAllData={getAllData}/>
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
