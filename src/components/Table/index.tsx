import {
  Paper,
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  styled,
  tableCellClasses,
  TableBody,
} from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
    fontSize: 14,
    borderBottom: '1px solid' + theme.palette.secondary.light,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    borderBottom: '1px solid' + theme.palette.secondary.light,
  },
  [`& .${tableCellClasses.root}`]: {
    border: 0,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const createData = (
  level: number,
  title: string,
  salary: number,
  equipment: number,
  overheads: number,
  estimatedProfit: number,
) => {
  return { level, title, salary, equipment, overheads, estimatedProfit };
};

const rows = [
  createData(159, 'Frozen yoghurt', 6.0, 24, 4.0, 200),
  createData(237, 'Ice cream sandwich', 9.0, 37, 4.3, 200),
  createData(262, 'Eclair', 16.0, 24, 6.0, 200),
  createData(305, 'Cupcake', 3.7, 67, 4.3, 200),
  createData(356, 'Gingerbread', 16.0, 49, 3.9, 200),
];

console.log('rows :>> ', rows);

const Table = () => {
  return (
    <TableContainer sx={{ padding: '0 10px' }}>
      <MuiTable sx={{ minWidth: 700 }} aria-label="customized table">
        <colgroup>
          <col style={{ width: '7%' }} />
          <col style={{ width: '45%' }} />
          <col style={{ width: '12%' }} />
          <col style={{ width: '12%' }} />
          <col style={{ width: '12%' }} />
          <col style={{ width: '12%' }} />
        </colgroup>
        <TableHead>
          <TableRow>
            <StyledTableCell>Уровень</StyledTableCell>
            <StyledTableCell>Наименование работ</StyledTableCell>
            <StyledTableCell>Основная з/п</StyledTableCell>
            <StyledTableCell>Оборудование</StyledTableCell>
            <StyledTableCell>Накладные расходы</StyledTableCell>
            <StyledTableCell>Сметная прибыль</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.level}>
              <StyledTableCell component="th" scope="row">
                {row.level}
              </StyledTableCell>
              <StyledTableCell>{row.title}</StyledTableCell>
              <StyledTableCell>{row.salary}</StyledTableCell>
              <StyledTableCell>{row.equipment}</StyledTableCell>
              <StyledTableCell>{row.overheads}</StyledTableCell>
              <StyledTableCell>{row.estimatedProfit}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
