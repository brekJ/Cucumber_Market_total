import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listItems: null,
};

export const ListSlice = createSlice({
  name: 'List',
  initialState,
  reducers: {
    setListItems: (state, action) => {
      state.listItems = action.payload;
    },
  },
});

export const { setListItems } = ListSlice.actions;

export default ListSlice.reducer;
