import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 1, title: "Run 5k", time: "4:00 PM", category: 'goal',isCompleted: false },
    { id: 2, title: "Study lesson", time: "6:00 PM", category: 'task', isCompleted: false },
    { id: 3, title: "Go to party", time: "10:00 PM", category: 'event', isCompleted: false },
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todos.push({
        id: Date.now(),
        time: action.payload.time,
        title: action.payload.title,
        category: action.payload.category,
        isCompleted: false,
      });
    },
    removeTask: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) todo.isCompleted = !todo.isCompleted;
    },
  },
});

export const { addTask, removeTask, toggleTask } = todoSlice.actions;
export default todoSlice.reducer;
