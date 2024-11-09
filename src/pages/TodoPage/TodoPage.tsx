import { TodoList } from "../../entities/task/ui/TodoList";
import styles from "./TodoPage.module.scss";

const TodoPage = () => {
  return (
    <div className={styles.container}>
      <TodoList />
    </div>
  );
};

export default TodoPage;
