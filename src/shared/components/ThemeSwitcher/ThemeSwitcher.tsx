import { FC } from "react";
import { useThemeContext } from "../../context/themeContext";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { IconButton } from "@mui/material";

import { ThemeMode } from "../../types/ThemeTypes";

const ThemeSwitcher: FC = () => {
  const { mode, toggleTheme } = useThemeContext();

  const isLightMode = mode === ThemeMode.Light;

  return (
    <IconButton onClick={toggleTheme} sx={{ margin: "16px" }}>
      {isLightMode ? (
        <DarkModeOutlinedIcon sx={{ color: "rgb(255, 255, 255)" }} />
      ) : (
        <WbSunnyOutlinedIcon />
      )}
    </IconButton>
  );
};

export default ThemeSwitcher;
