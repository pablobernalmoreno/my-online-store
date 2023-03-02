import React, { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import GameCard from "./GameCard";
import { styled } from "@mui/system";

const pb = new PocketBase("http://127.0.0.1:8090");

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
  const [cards, setCards] = useState();

  useEffect(() => {
    /**
     * Set api collection in the cards state
     *
     */
    const fetchData = async () => {
      setCards(
        await pb.collection("games").getFullList(200, {
          sort: "-created",
        })
      );
    };

    fetchData();
  }, []);

  return (
    <MySection>
      {cards?.map((card) => (
        <GameCard
          source={card.image}
          name={card.name}
          description={card.description}
          price={card.price}
          stock={card.inStock}
        />
      ))}
    </MySection>
  );
};

export default CardsContainer;
