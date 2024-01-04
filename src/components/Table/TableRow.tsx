import { styled, TableRow } from '@mui/material';
import React from 'react';

import RowActions from '../RowActions';
import Input from '../Input';
import { GetRowsResponse } from '../../services/outlay/types';

import TableCell from './TableCell';

import { IRow } from '.';

export const StyledRow = styled(TableRow)(({ theme }) => ({
  '&:last-child td': {
    border: 0,
  },
}));

interface CustomTableRowProps {
  handleCreateRow: (id: number) => void;
  handleDeleteRow: (id: number) => void;
  row: GetRowsResponse;
  handleDoubleClick: (id: number) => void;
  newRow: IRow;
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => Promise<void>;
  handleInputValue: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  setNewRow: React.Dispatch<React.SetStateAction<IRow>>;
}

export const CustomTableRow = ({
  handleCreateRow,
  handleDeleteRow,
  row,
  handleDoubleClick,
  newRow,
  handleKeyDown,
  setNewRow,
  handleInputValue,
}: CustomTableRowProps) => {
  if (row.id) {
    return (
      <StyledRow onDoubleClick={() => handleDoubleClick(row.id)}>
        <TableCell scope="row">
          <RowActions
            onCreate={() => handleCreateRow(row.id)}
            onRemove={() => handleDeleteRow(row.id)}
          />
        </TableCell>
        <TableCell>{row.rowName}</TableCell>
        <TableCell>{row.salary}</TableCell>
        <TableCell>{row.equipmentCosts}</TableCell>
        <TableCell>{row.overheads}</TableCell>
        <TableCell>{row.estimatedProfit}</TableCell>
      </StyledRow>
    );
  } else {
    return (
      <StyledRow>
        <TableCell scope="row">
          <RowActions
            onCreate={() => handleCreateRow}
            onRemove={() => handleDeleteRow}
          />
        </TableCell>
        <TableCell>
          <Input
            value={newRow.rowName}
            onChange={(e) => handleInputValue(e)}
            onKeyDown={handleKeyDown}
          />
        </TableCell>
        <TableCell>
          <Input
            value={newRow.salary}
            onChange={(e) => {
              setNewRow({ ...newRow, salary: e.target.value });
            }}
            type="number"
            onKeyDown={handleKeyDown}
          />
        </TableCell>
        <TableCell>
          <Input
            value={newRow.equipmentCosts}
            onChange={(e) => {
              setNewRow({ ...newRow, equipmentCosts: e.target.value });
            }}
            type="number"
            onKeyDown={handleKeyDown}
          />
        </TableCell>
        <TableCell>
          <Input
            value={newRow.overheads}
            onChange={(e) => {
              setNewRow({ ...newRow, overheads: e.target.value });
            }}
            type="number"
            onKeyDown={handleKeyDown}
          />
        </TableCell>
        <TableCell>
          <Input
            value={newRow.estimatedProfit}
            onChange={(e) => {
              setNewRow({ ...newRow, estimatedProfit: e.target.value });
            }}
            type="number"
            onKeyDown={handleKeyDown}
          />
        </TableCell>
      </StyledRow>
    );
  }
};
