import {
  ChangeEvent,
  FC,
  memo,
  useCallback,
  useState,
  KeyboardEvent,
} from "react";
import { useDispatch } from "react-redux";
import { Box, Button, TextField } from "@mui/material";

import { addTask } from "../../../entities/task/model/tasksSlice";
import styles from "./AddTask.module.scss";

const AddTask: FC = () => {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState("");

  const handleChangeText = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTextInput(event.target.value);
    },
    []
  );

  const handleAddNewTask = useCallback(() => {
    if (textInput.trim()) {
      dispatch(addTask(textInput));
      setTextInput("");
    }
  }, [textInput, addTask]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddNewTask();
    }
  };

  return (
    <Box
      className={styles.boxAdd}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingBottom: "15px",
        borderBottom: "1px solid whitesmoke",
        marginBottom: "20px",
        "& > :not(style)": { m: 1, width: "100%", height: "56px" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        className={styles.textFiled}
        id="outlined-basic"
        label="Добавить задачу..."
        variant="outlined"
        value={textInput}
        onChange={handleChangeText}
        onKeyDown={handleKeyDown}
      />
      <Button
        sx={{ maxWidth: "fit-content", padding: "10px" }}
        variant="outlined"
        onClick={handleAddNewTask}
      >
        Добавить задачу
      </Button>
    </Box>
  );
};

export default memo(AddTask);
