import React, { useEffect } from "react";
import GameCard from "./GameCard";
import { styled } from "@mui/system";
import { useFetchGameData } from "../../utils/pocketbase/pocketBaseUtils";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/actions/actions";

/**
 * Styled section component
 * @component
 * @returns {Component}  Styled section component
 */
export const MySection = styled("section")`
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
  const cards = useFetchGameData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(cards));
  }, [cards, dispatch]);

  return (
    <MySection>
      {cards?.map((card) => (
        <GameCard
          source={card.image}
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
