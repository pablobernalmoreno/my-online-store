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
      setGameData(
        await pb.collection("games").getOne(id, { $autoCancel: false })
      );
    };

    fetchData();
  }, [id]);

  return gameData;
};

/**
 * Custom hook created to fetch each comment by id
 * @param {*} id of each comment
 * @returns
 */
export const useFetchGameComments = (id) => {
  const [gameComments, setGameComments] = useState([]);
  const gameData = useFetchGameById(id);

  useEffect(() => {
    const fetchData = async (id) => {
      const comment = await pb.collection("comments").getOne(id, {});
      setGameComments((gameComments) => [...gameComments, comment]);
    };
    gameData?.comments?.forEach((comment) => {
      fetchData(comment);
    });
  }, [gameData?.comments]);

  return gameComments;
};
