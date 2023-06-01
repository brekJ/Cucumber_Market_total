import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const CategorySlice = createSlice({
  name: 'Category',
  initialState,
  reducers: {
    setCategoryValue: (state, action) => {
     state.value = action.payload;
    },
  },
});

export const { setCategoryValue } = CategorySlice.actions;

export default CategorySlice.reducer;
