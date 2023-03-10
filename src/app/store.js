import { configureStore } from '@reduxjs/toolkit'
import todosSliceReducer from '../features/todos/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosSliceReducer,
  },
})