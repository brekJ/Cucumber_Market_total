import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chatListItems: [],
};

export const ChatListSlice = createSlice({
  name: 'ChatList',
  initialState,
  reducers: {
    setChatListItems: (state, action) => {
      state.chatListItems = action.payload;
    },
  },
});

export const { setChatListItems } = ChatListSlice.actions;

export default ChatListSlice.reducer;
