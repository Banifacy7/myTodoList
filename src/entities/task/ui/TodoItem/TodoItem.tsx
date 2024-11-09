import { FC, useCallback, memo } from "react";
import { useDispatch } from "react-redux";

import { Checkbox, ListItemText, ListItem } from "@mui/material";

import { DeleteTask } from "../../../../features/deleteTask";
import { toggleTaskCompletion } from "../../model/tasksSlice";
import { Task } from "../../types";
import styles from "./TodoItem.module.scss";

const TodoItem: FC<{ task: Task }> = ({ task }) => {
  const dispatch = useDispatch();
  const { id, title, completed } = task;
  const taskClassName = completed ? `${styles.completed}` : "";

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
