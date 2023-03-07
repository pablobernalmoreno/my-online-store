import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { MyMain } from "../main/Main";

/**
 * The game detail page
 * @component
 * @returns {Component} Game page
 */
const GamePage = () => {
  const isDark = useSelector((state) => state.darkThemeReducer.darkTheme);
  return (
    <MyMain isDark={isDark}>
      <Typography>Titulo</Typography>
      <Typography>Descripcion (más detallada)</Typography>
      <Typography>Imagen</Typography>
      <Typography>Cantidad en stock</Typography>
      <Typography>Precio</Typography>
    </MyMain>
  );
};

export default GamePage;
