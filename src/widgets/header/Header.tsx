import { FC } from "react";
import { AppBar, styled, Toolbar } from "@mui/material";

import Logo from "../../../public/logo.svg";
import ThemeSwitcher from "../../shared/components/ThemeSwitcher/ThemeSwitcher";

const StyledAppBar = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Header: FC = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <img src={Logo} alt="My todolist logo" />
        <p>TodoList</p>
      </Toolbar>
      <ThemeSwitcher />
    </StyledAppBar>
  );
};

export default Header;
