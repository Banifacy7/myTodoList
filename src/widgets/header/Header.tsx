import { AppBar, Toolbar } from "@mui/material";
import { FC } from "react";
import Logo from "../../../public/logo.svg";
import ThemeSwitcher from "../../shared/components/ThemeSwitcher/ThemeSwitcher";

const Header: FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <img src={Logo} alt="My todolist logo" />
        <p>TodoList</p>
      </Toolbar>
      <ThemeSwitcher />
    </AppBar>
  );
};

export default Header;
