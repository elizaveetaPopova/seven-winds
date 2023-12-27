import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  styled,
  tableCellClasses,
  TableBody,
} from '@mui/material';
import { useState } from 'react';

import RowActions from '../RowActions';
import { useCreateRowMutation } from '../../services/outlay';
import Input from '../Input';
import { GetRowsResponse, IRowRequest } from '../../services/outlay/types';

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

interface TableProps {
  rows: GetRowsResponse[];
}

const Table = ({ rows }: TableProps) => {
  const [createRow, { isError }] = useCreateRowMutation();
  const [newRow, setNewRow] = useState({
    equipmentCosts: '',
    estimatedProfit: '',
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: '',
    parentId: 0,
    rowName: '',
    salary: '',
    supportCosts: 0,
  });

  const handleCreateRow = async (row: IRowRequest) => {
    await createRow(row);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const row = {
      ...newRow,
      equipmentCosts: +newRow.equipmentCosts,
      estimatedProfit: +newRow.estimatedProfit,
      overheads: +newRow.overheads,
      salary: +newRow.salary,
    };

    if (e.key === 'Enter') {
      handleCreateRow(row);
    }
  };

  const handleInputValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewRow({ ...newRow, rowName: e.target.value });
  };

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
          {rows.length === 0 && (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <RowActions onCreate={handleCreateRow} />
              </StyledTableCell>
              <StyledTableCell>
                <Input
                  value={newRow.rowName}
                  onChange={(e) => handleInputValue(e)}
                  onKeyDown={handleKeyDown}
                />
              </StyledTableCell>
              <StyledTableCell>
                <Input
                  value={newRow.salary}
                  onChange={(e) => {
                    setNewRow({ ...newRow, salary: e.target.value });
                  }}
                  type="number"
                  onKeyDown={handleKeyDown}
                />
              </StyledTableCell>
              <StyledTableCell>
                <Input
                  value={newRow.equipmentCosts}
                  onChange={(e) => {
                    setNewRow({ ...newRow, equipmentCosts: e.target.value });
                  }}
                  type="number"
                  onKeyDown={handleKeyDown}
                />
              </StyledTableCell>
              <StyledTableCell>
                <Input
                  value={newRow.overheads}
                  onChange={(e) => {
                    setNewRow({ ...newRow, overheads: e.target.value });
                  }}
                  type="number"
                  onKeyDown={handleKeyDown}
                />
              </StyledTableCell>
              <StyledTableCell>
                <Input
                  value={newRow.estimatedProfit}
                  onChange={(e) => {
                    setNewRow({ ...newRow, estimatedProfit: e.target.value });
                  }}
                  type="number"
                  onKeyDown={handleKeyDown}
                />
              </StyledTableCell>
            </StyledTableRow>
          )}
          {rows.map((row) => (
            <StyledTableRow key={row.rowName}>
              <StyledTableCell component="th" scope="row">
                <RowActions onCreate={handleCreateRow} />
              </StyledTableCell>
              <StyledTableCell>{row.rowName}</StyledTableCell>
              <StyledTableCell>{row.salary}</StyledTableCell>
              <StyledTableCell>{row.equipmentCosts}</StyledTableCell>
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
