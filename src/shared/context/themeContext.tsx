import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { ThemeMode } from "../types/ThemeTypes";
import { createTheme } from "@mui/system";
import { CssBaseline, ThemeProvider } from "@mui/material";

const ThemeContext = createContext({
  toggleTheme: () => {},
  mode: ThemeMode.Light,
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<ThemeMode>(ThemeMode.Light);

  useEffect(() => {
    const savedLocalTheme = localStorage.getItem("themeMode") as ThemeMode;
    if (savedLocalTheme) setMode(savedLocalTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => {
      const newMode =
        prevMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;

      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  }, []);

  const theme = useMemo(() => {
    return createTheme({
      palette: { mode },
    });
  }, [mode]);

  const themeProviderValue = useMemo(() => {
    return {
      toggleTheme,
      mode,
    };
  }, [mode]);

  return (
    <ThemeContext.Provider value={themeProviderValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
