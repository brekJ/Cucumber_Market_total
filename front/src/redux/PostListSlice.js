import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postListItems: [],
};

export const PostListSlice = createSlice({
  name: 'PostList',
  initialState,
  reducers: {
    setPostListItems: (state, action) => {
      state.postListItems = action.payload;
    },
  },
});

export const { setPostListItems } = PostListSlice.actions;

export default PostListSlice.reducer;
