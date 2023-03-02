import React from "react";
import { IconButton, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { styled } from "@mui/system";

const primaryColor = "#363e8a";

/**
 * Styled IconButton component
 * @component
 * @returns {Component} Styled IconButton component
 */
const MyIconButton = styled(IconButton)`
  color: #ffffff;
  &:hover {
    background-color: ${primaryColor};
  }
`;

/**
 * Styled form component
 * @component
 * @returns {Component} Styled form component
 */
const MyForm = styled("form")`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

/**
 * Styled TextField component
 * @component
 * @returns {Component} Styled TextField component
 */
const MyTextField = styled(TextField)`
  width: 100%;
  & .MuiFilledInput-root, .Mui-focused {
    color: ${primaryColor};
    background-color: #ffffff;
  },
`;

/**
 * SearchBar
 * @component
 * @returns {Component} SearchBar to find games
 */
const SearchBar = () => {
  return (
    <MyForm>
      <MyTextField label="search" variant="filled" />
      <MyIconButton>
        <SearchIcon />
      </MyIconButton>
    </MyForm>
  );
};

export default SearchBar;
