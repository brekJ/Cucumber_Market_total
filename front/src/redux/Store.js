import { configureStore } from '@reduxjs/toolkit';
import ImageReducer from './ImageSlice';
import ListReducer from './ListSlice';
import UserReducer from './UserSlice';
export const Store = configureStore({
  reducer: {
    Image: ImageReducer,
    List: ListReducer,
    User: UserReducer,
  },
});
