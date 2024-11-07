import {
  ChangeEvent,
  FC,
  memo,
  useCallback,
  useState,
  KeyboardEvent,
} from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask } from "../../../entities/task/model/tasksSlice";

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
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Добавить задачу..."
        variant="outlined"
        value={textInput}
        onChange={handleChangeText}
        onKeyDown={handleKeyDown}
      />
      <Button
        style={{ width: "100px" }}
        variant="outlined"
        onClick={handleAddNewTask}
      >
        Добавить задачу
      </Button>
    </Box>
  );
};

export default memo(AddTask);
// убрать дубликаты
