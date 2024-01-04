import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isEdit: boolean;
  editRowId: number | null;
}

const initialState: AppState = {
  isEdit: false,
  editRowId: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsEdit(state, action: PayloadAction<AppState>) {
      state.isEdit = action.payload.isEdit;
      state.editRowId = action.payload.editRowId;
    },
    undoEdition(state) {
      state.isEdit = false;
      state.editRowId = null;
    },
  },
});

export const { setIsEdit, undoEdition } = appSlice.actions;

export default appSlice.reducer;
