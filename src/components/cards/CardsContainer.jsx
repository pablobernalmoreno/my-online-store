import React from "react";
import GameCard from "./GameCard";
import { styled } from "@mui/system";
import { useFetchData } from "../../utils/pocketbase/pocketBaseUtils";

/**
 * Styled section component
 * @component
 * @returns {Component}  Styled section component
 */
const MySection = styled("section")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

/**
 * Component that contains the Card components.
 * It calls the pocket base server and sets it in the cards state
 * @component
 * @returns {Component} Mapping of the elements as Cards
 */
const CardsContainer = () => {
  const cards = useFetchData();

  return (
    <MySection>
      {cards?.map((card) => (
        <GameCard
          source={card.images[0]}
          name={card.name}
          description={card.description}
          price={card.price}
          stock={card.inStock}
          id={card.id}
        />
      ))}
    </MySection>
  );
};

export default CardsContainer;
