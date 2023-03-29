import PocketBase from "pocketbase";
import { useEffect, useState } from "react";

const pb = new PocketBase("http://127.0.0.1:8090");

/**
 * Custom hook created to fetch all the games in the database
 * @returns games array
 */
export const useFetchGameData = () => {
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
 * @param {string} id of each game
 * @returns game data
 */
export const useFetchGameById = (id) => {
  const [gameData, setGameData] = useState();

  useEffect(() => {
    /**
     * Async
     * Set api collection in the cards state
     *
     */
    const fetchData = async () => {
      const data = await pb.collection("games").getOne(id, {
        expand: "comments",
        $autoCancel: false,
      });
      setGameData(data);
    };

    fetchData();
  }, [id]);

  return gameData;
};
