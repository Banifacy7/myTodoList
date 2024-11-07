import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { Task, TasksState } from "../types";

const initialState: TasksState = {
  tasks: [
    {
      id: "1",
      title: "Тестовое задание",
      completed: false,
    },
    {
      id: "2",
      title: "Прекрасныый код",
      completed: false,
    },
    {
      id: "3",
      title: "Покрытый тестами",
      completed: false,
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: uuidv4(),
        title: action.payload,
        completed: false,
      };

      state.tasks.push(newTask);
    },

    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const taskToUpdate = state.tasks.find(
        (task) => task.id === action.payload
      );

      if (taskToUpdate) {
        taskToUpdate.completed = !taskToUpdate.completed;
      }
    },
  },
});

export const { addTask, removeTask, toggleTaskCompletion } = taskSlice.actions;
export default taskSlice.reducer;
