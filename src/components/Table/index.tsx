import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableBody,
} from '@mui/material';
import { useEffect, useState } from 'react';

import {
  useCreateRowMutation,
  useDeleteRowMutation,
  useUpdateRowMutation,
} from '../../services/outlay';
import { GetRowsResponse } from '../../services/outlay/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  setIsEdit,
  setIsNewRow,
  undoEdition,
  undoRowCreation,
} from '../../store/appSlise';
import { RootState } from '../../store';
import { IRow } from '../../types';

import TableCell from './TableCell';
import { CustomTableRow, EditRow, EmptyRow, StyledRow } from './TableRow';

interface TableProps {
  rows: GetRowsResponse[];
}

const newRowInitialState = {
  equipmentCosts: '',
  estimatedProfit: '',
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
  overheads: '',
  parentId: null,
  rowName: '',
  salary: '',
  supportCosts: 0,
};

const Table = ({ rows }: TableProps) => {
  const dispatch = useAppDispatch();

  const [createRow] = useCreateRowMutation();
  const [deleteRow] = useDeleteRowMutation();
  const [updateRow] = useUpdateRowMutation();

  const isRowEdit = useAppSelector((state: RootState) => state.app.isEdit);
  const isNewRow = useAppSelector((state: RootState) => state.app.isNewRow);
  const editRowId = useAppSelector((state: RootState) => state.app.editRowId);

  const parentRowId = useAppSelector(
    (state: RootState) => state.app.parentRowId,
  );

  const [rowsData, setRowsData] = useState<GetRowsResponse[]>([...rows]);
  const [newRow, setNewRow] = useState<IRow>(newRowInitialState);

  useEffect(() => {
    setRowsData(rows);
  }, [rows]);

  const handleCreateRow = (id: number) => {
    dispatch(setIsNewRow({ isNewRow: true, parentRowId: id }));
    dispatch(undoEdition());
    setNewRow({ ...newRowInitialState, parentId: id });
  };

  const handleDeleteRow = async (id: number) => {
    await deleteRow(id);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    const row = {
      ...newRow,
      equipmentCosts: +newRow.equipmentCosts,
      estimatedProfit: +newRow.estimatedProfit,
      overheads: +newRow.overheads,
      salary: +newRow.salary,
    };

    if (e.key === 'Enter' && isRowEdit) {
      delete (row as { parentId?: number | null }).parentId;
      await updateRow({ rID: editRowId, body: row }).then(() => {
        dispatch(undoEdition());
        setNewRow(newRowInitialState);
      });
    }

    if (e.key === 'Enter' && isNewRow) {
      await createRow(row).then(() => {
        dispatch(undoRowCreation());
        setNewRow(newRowInitialState);
      });
    }
  };

  const handleInputValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewRow({ ...newRow, rowName: e.target.value });
  };

  const recursiveFind = (
    searchRows: GetRowsResponse[],
    rowId: number,
  ): GetRowsResponse | undefined => {
    for (const row of searchRows) {
      if (row.id === rowId) {
        return row;
      }
      if (row.child) {
        const result = recursiveFind(row.child, rowId);
        if (result) {
          return result;
        }
      }
    }
    return undefined;
  };

  const handleDoubleClick = (rowId: number) => {
    const selectedRow = recursiveFind(rows, rowId);
    dispatch(setIsEdit({ isEdit: true, editRowId: rowId }));
    if (selectedRow) {
      setNewRow({
        ...newRow,
        equipmentCosts: selectedRow.equipmentCosts.toString(),
        estimatedProfit: selectedRow.estimatedProfit.toString(),
        machineOperatorSalary: selectedRow.machineOperatorSalary,
        mainCosts: selectedRow.mainCosts,
        materials: selectedRow.materials,
        mimExploitation: selectedRow.mimExploitation,
        overheads: selectedRow.overheads.toString(),
        rowName: selectedRow.rowName,
        salary: selectedRow.salary.toString(),
        supportCosts: selectedRow.supportCosts,
      });
    }
    dispatch(undoRowCreation());
  };

  const renderRow = (row: GetRowsResponse) => {
    return (
      <>
        {isRowEdit && editRowId === row.id ? (
          <EditRow
            newRow={newRow}
            setNewRow={setNewRow}
            handleInputValue={handleInputValue}
            handleKeyDown={handleKeyDown}
          />
        ) : (
          <CustomTableRow
            key={row.id}
            handleDoubleClick={() => handleDoubleClick(row.id)}
            handleCreateRow={() => handleCreateRow(row.id)}
            handleDeleteRow={() => handleDeleteRow(row.id)}
            row={row}
          />
        )}

        {isNewRow && parentRowId === row.id && (
          <EmptyRow
            newRow={newRow}
            setNewRow={setNewRow}
            handleInputValue={handleInputValue}
            handleKeyDown={handleKeyDown}
          />
        )}
      </>
    );
  };

  const renderRows = (row: GetRowsResponse): JSX.Element => {
    if (!row.child) {
      return renderRow(row);
    } else {
      return (
        <>
          {renderRow(row)}
          {row.child.map((nestedRow) => {
            return renderRows(nestedRow);
          })}
        </>
      );
    }
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
          <StyledRow>
            <TableCell>Уровень</TableCell>
            <TableCell>Наименование работ</TableCell>
            <TableCell>Основная з/п</TableCell>
            <TableCell>Оборудование</TableCell>
            <TableCell>Накладные расходы</TableCell>
            <TableCell>Сметная прибыль</TableCell>
          </StyledRow>
        </TableHead>

        <TableBody>
          {rowsData.map((row) => {
            return renderRows(row);
          })}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
