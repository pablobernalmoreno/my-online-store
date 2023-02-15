import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { styled } from "@mui/system";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import React, { useRef, useState } from "react";
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

  const handleMenuClick = (e) => {
    e.preventDefault();
    setMenuOpen(true);
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
        <MyGrid item xs={3}>
          <SearchBar />
        </MyGrid>
        <MyGrid item xd={2}>
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
            <MenuItem>Logout</MenuItem>
          </Menu>
        </MyGrid>
      </MyNavbar>
    </MyGrid>
  );
};

export default Navbar;
