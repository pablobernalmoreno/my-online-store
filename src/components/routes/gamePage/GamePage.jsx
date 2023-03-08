import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MyMain } from "../main/Main";
import { useFetchById } from "../../../utils/pocketbase/pocketBaseUtils";

/**
 * The game detail page
 * @component
 * @returns {Component} Game page
 */
const GamePage = () => {
  const isDark = useSelector((state) => state.darkThemeReducer.darkTheme);
  const { gameId } = useParams();

  const gameData = useFetchById(gameId);

  return (
    <MyMain isDark={isDark}>
      <Typography>{gameData?.name}</Typography>
      <Typography>{gameData?.description} (más detallada)</Typography>
      <img src={gameData?.image} alt={gameData?.name} />
      <Typography>{gameData?.inStock}</Typography>
      <Typography>{gameData?.price}</Typography>
    </MyMain>
  );
};

export default GamePage;
