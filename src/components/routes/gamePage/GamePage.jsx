import React from "react";
import { Typography } from "@material-ui/core";
import { MyMain } from "../main/Main";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useFetchById } from "../../../utils/pocketbase/pocketBaseUtils";
import SimpleCarousel from "../../carousel/SimpleCarousel";

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
    <>
      <MyMain isDark={isDark}>
        <Typography>{gameData?.name}</Typography>
        <Typography>{gameData?.description} (más detallada)</Typography>
        <SimpleCarousel leftArrow="-" rightArrow="+">
          {gameData?.images.map((item) => (
            <img src={item} style={{ width: "500px", height: "400px" }} />
          ))}
        </SimpleCarousel>
        <Typography>{gameData?.inStock}</Typography>
        <Typography>{gameData?.price}</Typography>
      </MyMain>
    </>
  );
};

export default GamePage;
