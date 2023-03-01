import { ADDITEMTOCART, CHANGEDARKTHEME, REMOVEFROMCART } from "../types/types";

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

export const removeFromCart = (state) => {
  return {
    type: REMOVEFROMCART,
    payload: state,
  };
};
