import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import ReactSimplyCarousel from "react-simply-carousel";
import { MyMain } from "../main/Main";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const images = [
    <img src={gameData?.image} alt={gameData?.name} />,
    <img src={gameData?.image} alt={gameData?.name} />,
    <img src={gameData?.image} alt={gameData?.name} />,
    <img src={gameData?.image} alt={gameData?.name} />,
  ];

  return (
    <>
      <MyMain isDark={isDark}>
        <Typography>{gameData?.name}</Typography>
        <Typography>{gameData?.description} (más detallada)</Typography>
        <Typography>{gameData?.inStock}</Typography>
        <Typography>{gameData?.price}</Typography>
      </MyMain>
      <div>
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 1,
              itemsToScroll: 2,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        >
          {images.map((item) => item)}
        </ReactSimplyCarousel>
      </div>
    </>
  );
};

export default GamePage;
