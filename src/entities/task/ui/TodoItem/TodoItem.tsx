import { FC, useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import { Checkbox, ListItemText, ListItem } from "@mui/material";

import { DeleteTask } from "../../../../features/deleteTask";
import { toggleTaskCompletion } from "../../model/tasksSlice";
import { Task } from "../../types";

const TodoItem: FC<{ task: Task }> = ({ task }) => {
  const dispatch = useDispatch();
  const { id, title, completed } = task;
  const taskStyles = completed
    ? { textDecoration: "line-through", color: "rgb(141, 141, 141)" }
    : undefined;

  const toggleCompletion = useCallback(() => {
    dispatch(toggleTaskCompletion(id));
  }, [dispatch, id]);

  return (
    <ListItem>
      <Checkbox edge="start" checked={completed} onChange={toggleCompletion} />
      <ListItemText primary={title} sx={taskStyles} />
      <DeleteTask id={id} />
    </ListItem>
  );
};

export default memo(TodoItem);
