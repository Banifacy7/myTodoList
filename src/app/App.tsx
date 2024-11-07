import { FC } from "react";
import { Provider } from "react-redux";
import { TodoPage } from "../pages/TodoPage";
import { store } from "./store";
import "./App.css";

const App: FC = () => {
  return (
    <Provider store={store}>
      <TodoPage />
    </Provider>
  );
};

export default App;
