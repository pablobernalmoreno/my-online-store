import { ADDITEMTOCART, CHANGEDARKTHEME } from "../types/types";

export const changeDarkTheme = (state) => {
  return {
    type: CHANGEDARKTHEME,
    payload: state,
  };
};

export const addItemToCart = (state) => {
  return {
    type: ADDITEMTOCART,
    payload: state,
  };
};
