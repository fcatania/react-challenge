import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import initialData from '../data/projects.json';
import { Project } from '../models/Project';

export interface ProjectsState {
  data: Array<Project>
}

const initialState: ProjectsState = {
  data: initialData,
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Project>) => {
      state.data.push(action.payload)
    },
    edit: (state, action: PayloadAction<Project>) => {
      // Here I could take advantage of the fact that ids are ordered and integers
      // and use it as index instead of iterating, but it isn't a good approach generally
      // as ids shouldn't be just numbers like that
      state.data.forEach(project => {
        if (project.id === action.payload.id) {
          project.name = action.payload.name;
          project.description = action.payload.description;
          project.owner = action.payload.owner;
        }
      })
    },
  },
})

export const { create, edit } = projectsSlice.actions

export default projectsSlice.reducer