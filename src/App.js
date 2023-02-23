import React from "react";
import { Provider } from "react-redux";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Main />
    </Provider>
  );
};
export default App;
