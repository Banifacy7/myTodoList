import { FC, memo, useCallback } from "react";

import { removeTask } from "../../../entities/task/model/tasksSlice";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./DeleteTask.modules.scss";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

const DeleteTask: FC<{ id: string }> = ({ id }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = useCallback(() => {
    dispatch(removeTask(id));
  }, [id, dispatch]);

  return (
    <Button onClick={handleDeleteTask} sx={{ color: "red" }}>
      <DeleteOutlineOutlinedIcon />
    </Button>
  );
};

export default memo(DeleteTask);
