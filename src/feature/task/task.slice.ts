import { createDraftSafeSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from './task.type';

export interface PartialState {
  tasks: Task[];
  currentTaskId?: string | number;
  searchText?: string;
  range?: {
    skip: number;
    take: number;
  }
}

const initialState: PartialState = {
  tasks: [],
  range: { take: 50, skip: 0 },
};

export const taskSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const idx = state.tasks.findIndex((i) => i.id === action.payload.id);
      state.tasks[idx] = action.payload;
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((i) => i.id !== action.payload);
    },
    loadCurrent: (state, action: PayloadAction<string>) => {
      state.currentTaskId = action.payload;
    },
    loadSearchedItems: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const {
  initTasks, addTask, removeTask, loadCurrent, loadSearchedItems,
} = taskSlice.actions;

const selectSelf = (state: { task: PartialState }) => state;

export const selectTasks = createDraftSafeSelector(
  selectSelf,
  (state) => state.task.tasks.slice(state.task.range?.skip, state.task.range?.take),
);

export const selectCurrentTask = createDraftSafeSelector(
  selectSelf,
  (state) => state.task.tasks.find((i) => i.id === state.task.currentTaskId),
);

export default taskSlice.reducer;
