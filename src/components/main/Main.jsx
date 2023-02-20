import { styled } from "@mui/system";
import React from "react";
import CardsContainer from "../cards/CardsContainer";

const MyMain = styled("main")`
  margin-top: 15px;
`;

const Main = () => {
  return (
    <MyMain>
      Main
      <CardsContainer />
    </MyMain>
  );
};

export default Main;
