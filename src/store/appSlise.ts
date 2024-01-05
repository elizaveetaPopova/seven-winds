import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isEdit: boolean;
  isNewRow: boolean;
  editRowId: number | null;
  parentRowId: number | null;
}

const initialState: AppState = {
  isNewRow: false,
  isEdit: false,
  parentRowId: null,
  editRowId: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsNewRow(
      state,
      action: PayloadAction<{ isNewRow: boolean; parentRowId: number | null }>,
    ) {
      state.isNewRow = action.payload.isNewRow;
      state.parentRowId = action.payload.parentRowId;
    },
    setIsEdit(
      state,
      action: PayloadAction<{ isEdit: boolean; editRowId: number | null }>,
    ) {
      state.isEdit = action.payload.isEdit;
      state.editRowId = action.payload.editRowId;
    },
    undoEdition(state) {
      state.isEdit = false;
      state.editRowId = null;
    },
    undoRowCreation(state) {
      state.isNewRow = false;
      state.parentRowId = null;
    },
  },
});

export const { setIsEdit, undoEdition, setIsNewRow, undoRowCreation } =
  appSlice.actions;

export default appSlice.reducer;
