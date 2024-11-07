import { TodoList } from "../../entities/task/ui/TodoList";
import "./TodoPage.modules.scss";

const TodoPage = () => {
  return (
    <div className="todo-page-container">
      <h1>Страница список задач</h1>
      <TodoList />
    </div>
  );
};

export default TodoPage;
