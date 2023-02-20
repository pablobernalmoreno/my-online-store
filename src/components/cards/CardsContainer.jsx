import React, { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import GameCard from "./GameCard";
import { styled } from "@mui/system";

const pb = new PocketBase("http://127.0.0.1:8090");

const MySection = styled("section")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CardsContainer = () => {
  const [cards, setCards] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setCards(
        await pb.collection("games").getFullList(200 /* batch size */, {
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
