import { FC } from "react";
import { Provider } from "react-redux";

import { TodoPage } from "../pages/TodoPage";
import { store } from "./store";
import { ThemeContextProvider } from "../shared/context/themeContext";
import AppContent from "./AppContent";

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AppContent />
      </ThemeContextProvider>
    </Provider>
  );
};

export default App;
