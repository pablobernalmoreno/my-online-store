import {
  ADDITEMTOCART,
  CHANGEDARKTHEME,
  FETCHDATA,
  REMOVEFROMCART,
} from "../types/types";

/**
 *
 * @param {boolean} state determines the state of the darktheme
 * @returns {Object} with its type "CHANGEDARKTHEME" and as payload the state
 */
export const changeDarkTheme = (state) => {
  return {
    type: CHANGEDARKTHEME,
    payload: state,
  };
};

/**
 *
 * @param {Object} state item object that has source, name and price of the game
 * @returns {Object} with its type "ADDITEMTOCART" and has as payload the state
 */
export const addItemToCart = (state) => {
  return {
    type: ADDITEMTOCART,
    payload: state,
  };
};

/**
 *
 * @param {number} state index number for each game in card
 * @returns {Object} with its type "ADDITEMTOCART" and has as payload the state
 */
export const removeFromCart = (state) => {
  return {
    type: REMOVEFROMCART,
    payload: state,
  };
};

/**
 *
 * @param {Array} state game data fetched of all games
 * @returns {Object} with its type "FETCHDATA" and has as payload the state
 */
export const fetchData = (state) => {
  return {
    type: FETCHDATA,
    payload: state,
  };
};
