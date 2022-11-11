import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectsSlice';
import usersReducer from './usersSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;