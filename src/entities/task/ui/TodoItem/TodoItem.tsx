import { FC, useCallback, useState, memo } from "react";

import {
  Button,
  Checkbox,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { ListItem } from "@mui/material";

import { Task } from "../../types";
import "./TodoItem.module.scss";
import { useDispatch } from "react-redux";
import { toggleTaskCompletion } from "../../model/tasksSlice";
import { DeleteTask } from "../../../../features/deleteTask";

const TodoItem: FC<{ task: Task }> = ({ task }) => {
  const dispatch = useDispatch();
  //Добавить reducer для Checkbox (toogleTaskCompletion) => в taskSlice(по аналогии с addTask)
  const { id, title, completed } = task;
  const taskClassName = completed ? "completed" : "";

  const toggleCompletion = useCallback(() => {
    dispatch(toggleTaskCompletion(id));
  }, [dispatch, id]);

  return (
    <ListItem>
      <Checkbox edge="start" checked={completed} onChange={toggleCompletion} />
      <ListItemText primary={title} className={taskClassName} />
      <DeleteTask id={id} />
    </ListItem>
  );
};

export default memo(TodoItem);
