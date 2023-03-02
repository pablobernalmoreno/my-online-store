import { CHANGEDARKTHEME } from "../types/types";

const initialState = { darkTheme: false };

/**
 * 
 * @param {object} state object that controls the dark/light theme 
 * @param {object} action to be done to the state
 * @returns state based on the type of action that it did to the state
 */
const darkThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGEDARKTHEME:
      return { ...state, darkTheme: action.payload };
    default:
      return state;
  }
};

export default darkThemeReducer;
