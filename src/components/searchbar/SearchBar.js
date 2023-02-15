import React from "react";
import { IconButton, TextField, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { styled } from "@mui/system";

const primaryColor = "#363e8a";

const MyIconButton = styled(IconButton)`
  color: #ffffff;
  &:hover {
    background-color: ${primaryColor};
  }
`;

const MyForm = styled("form")`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const MyTextField = styled(TextField)`
  width: 100%;
  & .MuiFilledInput-root, .Mui-focused {
    color: ${primaryColor};
    background-color: #ffffff;
  },
`;

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
