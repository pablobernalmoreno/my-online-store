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

/**
 * Styled AppBar component
 * @component
 * @returns {Component} Styled AppBar component
 */
const MyNavbar = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  background: #4057b8;
`;

/**
 * Styled IconButton component
 * @component
 * @returns {Component} Styled IconButton component
 */
const MyIconButton = styled(IconButton)`
  color: #ffffff;
  margin: 0 10px;
`;

/**
 * Styled Typography component
 * @component
 * @returns {Component} Styled Typography component
 */
const MyTypography = styled(Typography)`
  font-size: 40px;
  color: #ffffff;
`;

/**
 * Styled Grid component
 * @component
 * @returns {Component} Styled Grid component
 */
const MyGrid = styled(Grid)`
  display: flex;
  align-items: flex-end;
`;

/**
 * Styled Grid component
 * @component
 * @returns {Component} Styled Grid component
 */
const MyStickyGrid = styled(Grid)`
  position: sticky;
  top: -10px;
  z-index: 200;
`;

/**
 * Navbar component
 * @component
 * @returns {Component} Navbar for the navigation of the whole app
 */
const Navbar = () => {
  const menuAnchor = useRef();
  const [items] = useState(useSelector((state) => state.addToCartReducer));
  const [itemsInCart, setItemsInCart] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    useSelector((state) => state.darkThemeReducer.darkTheme)
  );
  const dispatch = useDispatch();

  /**
   *
   * Sets the state of the menu to true
   */
  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  /**
   * Sets the darkMode state to the opposite of the previous state
   * Dispatches changeDarkTheme with the opposite of the previous state in the global redux state
   */
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(changeDarkTheme(!darkMode));
  };

  /**
   * Sets the state dialogOpen to true
   */
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  /**
   * Sets the state dialogOpen to false
   */
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    setItemsInCart(items.length);
  }, [items.length]);

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
