import { ADDITEMTOCART, CHANGEDARKTHEME, REMOVEFROMCART } from "../types/types";

/**
 * 
 * @param {boolean} state determines the state of the darktheme
 * @returns {object} with its type "CHANGEDARKTHEME" and as payload the state
 */
export const changeDarkTheme = (state) => {
  return {
    type: CHANGEDARKTHEME,
    payload: state,
  };
};

/**
 * 
 * @param {object} state item object that has source, name and price of the game 
 * @returns {object} with its type "ADDITEMTOCART" and has as payload the state
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
 * @returns {object} with its type "ADDITEMTOCART" and has as payload the state
 */
export const removeFromCart = (state) => {
  return {
    type: REMOVEFROMCART,
    payload: state,
  };
};
