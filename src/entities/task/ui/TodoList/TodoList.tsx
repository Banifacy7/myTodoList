import { FC } from "react";
import { useSelector } from "react-redux";
import { List, Stack, Typography } from "@mui/material";

import { RootState } from "../../../../app/store.ts";
import { AddTask } from "../../../../features/addTask/index.ts";
import { TodoItem } from "../TodoItem/index.ts";
import "./TodoList.modules.scss";

const TodoList: FC = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  return (
    <div className="container">
      <AddTask />
      <Stack
        className="stack"
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {`Количество задач: ${tasks.length}`}
        </Typography>
        <List
          className="list"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {tasks.map((task) => (
            <TodoItem task={task}></TodoItem>
          ))}
        </List>
      </Stack>
    </div>
  );
};

export default TodoList;
