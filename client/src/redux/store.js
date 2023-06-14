import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './taskList.js';

export const store = configureStore({
  reducer: {
    taskList: taskReducer
  },
});