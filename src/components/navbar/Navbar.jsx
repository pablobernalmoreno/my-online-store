import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Badge,
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
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { changeDarkTheme } from "../../redux/actions/actions";
import SimpleDialog from "../dialog/SimpleDialog";

const MyNavbar = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
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
const MyStickyGrid = styled(Grid)`
  position: sticky;
  top: -10px;
  z-index: 200;
`;

const Navbar = () => {
  const menuAnchor = useRef();
  const isDark = useSelector((state) => state.darkThemeReducer.darkTheme);
  const items = useSelector((state) => state.addToCartReducer);
  const itemsInCart = items.length;
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(isDark);
  const dispatch = useDispatch();

  const handleMenuClick = (e) => {
    e.preventDefault();
    setMenuOpen(true);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(changeDarkTheme(!darkMode));
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    console.log(42, itemsInCart);
  }, [itemsInCart]);

  return (
    <MyStickyGrid container spacing={3}>
      <MyNavbar>
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
          <MyIconButton onClick={handleDialogOpen}>
            {itemsInCart === 0 ? (
              <AddShoppingCartIcon />
            ) : (
              <Badge badgeContent={itemsInCart} color="primary">
                <ShoppingCartIcon />
              </Badge>
            )}
          </MyIconButton>
          <SimpleDialog open={dialogOpen} onClose={handleDialogClose} />
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
    </MyStickyGrid>
  );
};

export default Navbar;
