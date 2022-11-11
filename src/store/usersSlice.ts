import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import initialData from '../data/users.json';
import { User } from '../models/User';

export interface UsersState {
  data: Array<User>
}

const initialState: UsersState = {
  data: initialData,
}

export const userssSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<User>) => {
      state.data.push(action.payload)
    },
    edit: (state, action: PayloadAction<User>) => {
      // Here I could take advantage of the fact that ids are ordered and integers
      // and use it as index instead of iterating, but it isn't a good approach generally
      // as ids shouldn't be just numbers like that
      state.data.forEach(project => {
        if (project.id === action.payload.id) {
          project.name = action.payload.name;
          project.email = action.payload.email;
        }
      })
    },
  },
})

export const { create, edit } = userssSlice.actions

export default userssSlice.reducer