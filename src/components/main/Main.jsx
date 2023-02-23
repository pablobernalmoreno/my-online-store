import { styled } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import CardsContainer from "../cards/CardsContainer";

const MyMain = styled("main")(({ isDark }) => ({
  marginTop: "10px",
  backgroundColor: isDark ? "#121212" : "#e0e0e0",
}));

const Main = () => {
  const isDark = useSelector((state) => state.darkThemeReducer.darkTheme);
  return (
    <MyMain isDark={isDark}>
      <CardsContainer />
    </MyMain>
  );
};

export default Main;
