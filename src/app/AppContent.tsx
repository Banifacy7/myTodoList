import { FC, useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { useThemeContext } from "../shared/context/themeContext";
import { lightTheme, darkTheme } from "../shared/config/theme/theme";
import Header from "../widgets/header/Header";
import { TodoPage } from "../pages/TodoPage";
import { ThemeMode } from "../shared/types/ThemeTypes";

const AppContent: FC = () => {
  const { mode } = useThemeContext();
  const theme = useMemo(() => {
    return mode === ThemeMode.Light ? lightTheme : darkTheme;
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <TodoPage />
    </ThemeProvider>
  );
};

export default AppContent;
