
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material';
import { useState} from 'react';
import Pagination from '../Pagination';


const TableComp = ({data}) => {
 
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
    return data.slice(page*rowsPerPage,(page+1)*rowsPerPage)
  }
  
  return (
    <>
    <TableContainer sx={{ maxHeight: 440 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
        
            <TableCell>NAME</TableCell>
            <TableCell align="left">ADDRESS</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {dataForPagination().map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.address}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
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
