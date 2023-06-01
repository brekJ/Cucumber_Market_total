import { configureStore } from '@reduxjs/toolkit';
import ImageReducer from './ImageSlice';
import PostListReducer from './PostListSlice';
import ChatListReducer from './ChatListSlice';
import UserReducer from './UserSlice';
import CategoryReducer from './CategorySlice';
export const Store = configureStore({
  reducer: {
    Image: ImageReducer,
    PostList: PostListReducer,
    ChatList: ChatListReducer,
    User: UserReducer,
    Category:CategoryReducer,
  },
});
