import { styled, TableRow } from '@mui/material';
import React, { useLayoutEffect, useRef, useState } from 'react';

import RowActions from '../RowActions';
import Input from '../Input';
import { GetRowsResponse } from '../../services/outlay/types';
import { IRow } from '../../types';
import LineDrawing from '../Line';

import TableCell from './TableCell';

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
}

interface EditRowProps {
  newRow: IRow;
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => Promise<void>;
  handleInputValue: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  setNewRow: React.Dispatch<React.SetStateAction<IRow>>;
}

export const EditRow = ({
  newRow,
  handleKeyDown,
  setNewRow,
  handleInputValue,
}: EditRowProps) => {
  return (
    <StyledRow>
      <TableCell scope="row">
        <RowActions onCreate={() => {}} onRemove={() => {}} />
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
};

export const EmptyRow = ({
  newRow,
  handleKeyDown,
  setNewRow,
  handleInputValue,
}: EditRowProps) => {
  return (
    <StyledRow>
      <TableCell scope="row">
        <RowActions onCreate={() => {}} onRemove={() => {}} />
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
};

export const CustomTableRow = ({
  handleCreateRow,
  handleDeleteRow,
  row,
  handleDoubleClick,
}: CustomTableRowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | undefined>(0);

  useLayoutEffect(() => {
    setWidth(ref.current?.offsetWidth);
  }, [width]);

  console.log('width :>> ', width);

  return (
    <StyledRow onDoubleClick={() => handleDoubleClick(row.id)}>
      <TableCell scope="row" ref={ref}>
        <RowActions
          onCreate={() => handleCreateRow(row.id)}
          onRemove={() => handleDeleteRow(row.id)}
        />
        {/* <LineDrawing width={} height={} /> */}
      </TableCell>
      <TableCell>{row.rowName}</TableCell>
      <TableCell>{row.salary}</TableCell>
      <TableCell>{row.equipmentCosts}</TableCell>
      <TableCell>{row.overheads}</TableCell>
      <TableCell>{row.estimatedProfit}</TableCell>
    </StyledRow>
  );
};
