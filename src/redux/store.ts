import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../feature/task/task.slice';

export default configureStore({
  reducer: {
    task: taskReducer,
  },
});
