import { createStore } from "redux";
import { combineReducers } from "redux";
import darkThemeReducer from "./reducers/darkThemeReducer";
import addToCartReducer from "./reducers/addToCartReducer";

const reducers = combineReducers({
  darkThemeReducer,
  addToCartReducer,
});

const store = createStore(reducers);

store.getState();
export default store;
