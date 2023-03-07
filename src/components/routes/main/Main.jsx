import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import CardsContainer from "../../cards/CardsContainer";

/**
 * Styled main component
 * @component
 * @param {boolean} isDark Check for the dark/light theme
 * @returns {Component} Styled main component
 */
export const MyMain = styled("main")(({ isDark }) => ({
  marginTop: "10px",
  backgroundColor: isDark ? "#121212" : "#e0e0e0",
}));

/**
 * The main page
 * @component
 * @returns {Component} Main page
 */
const Main = () => {
  const isDark = useSelector((state) => state.darkThemeReducer.darkTheme);
  return (
    <MyMain isDark={isDark}>
      <CardsContainer />
    </MyMain>
  );
};

MyMain.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

export default Main;
