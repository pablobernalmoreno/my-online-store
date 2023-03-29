import { FETCHDATA } from "../types/types";

const initialState = [];

/**
 *
 * @param {Array} state object that controls the dark/light theme
 * @param {Object} action to be done to the state
 * @returns state based on the type of action that it did to the state
 */
const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHDATA:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default fetchDataReducer;
