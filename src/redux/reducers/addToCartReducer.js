import { ADDITEMTOCART, REMOVEFROMCART } from "../types/types";

const initialState = [];

/**
 * 
 * @param {Array} state array of objects
 * @param {object} action to be done to the state
 * @returns {object} state based on the type of action that it did to the state
 */
const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITEMTOCART:
      state.push(action.payload);
      return state;
    case REMOVEFROMCART:
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
};

export default addToCartReducer;
