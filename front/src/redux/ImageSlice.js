import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const ImageSlice = createSlice({
  name: 'Image',
  initialState,
  reducers: {
    setImageValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setImageValue } = ImageSlice.actions;

export default ImageSlice.reducer;
