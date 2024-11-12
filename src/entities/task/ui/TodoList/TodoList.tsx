import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { List, Stack } from "@mui/material";

import { RootState } from "../../../../app/store.ts";
import { AddTask } from "../../../../features/addTask/index.ts";
import { TodoItem } from "../TodoItem/index.ts";
import styles from "./TodoList.module.scss";

const TodoList: FC = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  return (
    <div className={styles.container}>
      <AddTask />
      <Stack
        className={styles.stack}
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>{`Количество задач: ${tasks.length}`}</h3>
        <List
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task}></TodoItem>
          ))}
        </List>
      </Stack>
    </div>
  );
};

export default memo(TodoList);
