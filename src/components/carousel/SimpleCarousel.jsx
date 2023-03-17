import React, { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

const SimpleCarousel = ({ children, leftArrow, rightArrow }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const arrowStyles = {
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
  };

  return (
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      itemsToScroll={1}
      forwardBtnProps={{
        style: arrowStyles,
        children: rightArrow,
      }}
      backwardBtnProps={{
        style: arrowStyles,
        children: leftArrow,
      }}
      speed={400}
      easing="linear"
    >
      {children}
    </ReactSimplyCarousel>
  );
};

export default SimpleCarousel;
