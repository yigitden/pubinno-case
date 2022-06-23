export const TableStyle = {
  container: {
    maxHeight: 440,
  },
  table_header: {
    minWidth: 650,
  },
  table_cell: {
    width: "50%",
  },
  table_item:{
    "&:last-child td, &:last-child th": { border: 0 },
    cursor: "pointer",
    "&:hover":{backgroundColor:'#f2f0f0',transition:'0.4s'}
  }
};
