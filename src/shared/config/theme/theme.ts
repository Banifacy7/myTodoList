import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FFFFFF",
    },
    primary: { main: "rgb(25, 118, 210)" },
    error: { main: "rgb(239, 24, 24)" },
    text: {
      primary: "rgb(43, 43, 43)",
      secondary: "rgb(133, 133, 133)",
    },
    divider: "rgb(202, 202, 202)",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "rgb(43, 43, 43)",
    },
    primary: { main: "rgb(25, 118, 210)" },
    error: { main: "rgb(239, 24, 24)" },
    text: {
      primary: "#FFFFFF",
      secondary: "rgb(202, 202, 202)",
    },
    divider: "rgb(202, 202, 202)",
  },
});
