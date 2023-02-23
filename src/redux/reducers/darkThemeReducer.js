import { CHANGEDARKTHEME } from "../types/types";

const initialState = { darkTheme: false };

const darkThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGEDARKTHEME:
      return { ...state, darkTheme: action.payload };
    default:
      return state;
  }
};

export default darkThemeReducer;
