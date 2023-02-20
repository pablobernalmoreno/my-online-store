import { CHANGEDARKTHEME } from "../types/types";

export const changeDarkTheme = (state) => {
  return {
    type: CHANGEDARKTHEME,
    payload: state,
  };
};
