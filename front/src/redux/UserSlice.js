import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1,
  loginUser: null,
};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUserValue: (state, action) => {
     state.value = action.payload;
    },
    setLoginUser: (state, action) =>{
        state.loginUser = action.payload;
    }
  },
});

export const { setUserValue } = UserSlice.actions;
export const { setLoginUser} = UserSlice.actions;

export default UserSlice.reducer;
