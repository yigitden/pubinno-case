import React, { useState } from "react";
import TablePagination from "@mui/material/TablePagination";

const Pagination = ({
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  page,
}) => {
  return (
    <TablePagination
      component="div"
      showFirstButton="true"
      showLastButton="true"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
    />
  );
};

export default Pagination;
