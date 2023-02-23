import { ADDITEMTOCART } from "../types/types";

const initialState = [];

const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITEMTOCART:
      state.push(action.payload);
      return state;
    default:
      return state;
  }
};

export default addToCartReducer;
