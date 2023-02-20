import React, { useRef, useState } from "react";
import {
  AppBar,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  Typography,
} from "@material-ui/core";
import { styled } from "@mui/system";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import SearchBar from "../searchbar/SearchBar";


const MyNavbar = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MyIconButton = styled(IconButton)`
  color: white;
  margin: 0 10px;
`;

const MyTypography = styled(Typography)`
  font-size: 40px;
  color: #ffffff;
`;

const MyGrid = styled(Grid)`
  display: flex;
  align-items: flex-end;
`;

const Navbar = () => {
  const menuAnchor = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleMenuClick = (e) => {
    e.preventDefault();
    setMenuOpen(true);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <MyGrid container spacing={3}>
      <MyNavbar position="sticky">
        <MyGrid item xs={2}>
          <MyIconButton>
            <MenuIcon />
          </MyIconButton>
        </MyGrid>
        <MyGrid item xs={5}>
          <MyTypography variant="h1">Find your games!</MyTypography>
        </MyGrid>
        <MyGrid item xd={5}>
          <SearchBar />
          <MyIconButton ref={menuAnchor} onClick={handleMenuClick}>
            <PersonIcon />
          </MyIconButton>
          <Menu
            anchorEl={menuAnchor.current}
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem onClick={handleDarkMode}>
              {darkMode ? <Brightness2Icon /> : <Brightness5Icon />}
              <Switch checked={darkMode} />
            </MenuItem>
          </Menu>
        </MyGrid>
      </MyNavbar>
    </MyGrid>
  );
};

export default Navbar;
