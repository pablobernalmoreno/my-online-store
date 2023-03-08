import PocketBase from "pocketbase";
import { useEffect, useState } from "react";

const pb = new PocketBase("http://127.0.0.1:8090");

/**
 * Custom hook created to fetch all the games in the database
 * @returns games array
 */
export const useFetchData = () => {
  const [games, setGames] = useState();

  useEffect(() => {
    /**
     * Async
     * Set api collection in the cards state
     *
     */
    const fetchData = async () => {
      setGames(
        await pb.collection("games").getFullList({
          sort: "-created",
        })
      );
    };

    fetchData();
  }, []);
  return games;
};

/**
 * Custom hook created to fetch one game by Id
 * @returns game data
 */
export const useFetchById = (id) => {
  const [gameData, setGameData] = useState();

  useEffect(() => {
    /**
     * Async
     * Set api collection in the cards state
     *
     */
    const fetchData = async () => {
      setGameData(await pb.collection("games").getOne(id, {}));
    };

    fetchData();
  }, [id]);

  return gameData;
};
