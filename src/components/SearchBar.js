import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

const primaryColor = "#363e8a";

const MyButton = styled(Button)`
  width: 30%;
  &.MuiButton-containedPrimary {
    color: #ffffff;
    &:hover {
      background-color: ${primaryColor};
    }
  }
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyTextField = styled(TextField)`
  width: 30%;
  & .MuiOutlinedInput-root {
    color: ${primaryColor};
  },
`;

const MyTypography = styled(Typography)`
  font-size: 20px;
  color: ${primaryColor};
`;

const SearchBar = () => {
  return (
    <MyForm>
      <MyTypography variant="h4">Find your games!</MyTypography>
      <MyTextField label="Outlined" variant="outlined" />
      <MyButton variant="contained" color="primary" disableElevation>
        Search
        <SearchIcon />
      </MyButton>
    </MyForm>
  );
};

export default SearchBar;
