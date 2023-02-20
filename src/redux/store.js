import { createStore } from "redux";
import { combineReducers } from "redux";
import darkThemeReducer from "./reducers/darkThemeReducer";

const reducers = combineReducers({
  darkThemeReducer,
});

const store = createStore(reducers);

store.getState();
export default store;
