import { createStore } from "redux";
import { combineReducers } from "redux";
import darkThemeReducer from "./reducers/darkThemeReducer";
import addToCartReducer from "./reducers/addToCartReducer";
import fetchDataReducer from "./reducers/fetchDataReducer";

const reducers = combineReducers({
  darkThemeReducer,
  addToCartReducer,
  fetchDataReducer,
});

const store = createStore(reducers);

store.getState();
export default store;
