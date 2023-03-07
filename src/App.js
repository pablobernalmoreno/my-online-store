import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/routes/main/Main";
import Navbar from "./components/navbar/Navbar";
import store from "./redux/store";
import GamePage from "./components/routes/gamePage/GamePage";
import { ErrorPage } from "./components/routes/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <GamePage />,
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <RouterProvider router={router} />
    </Provider>
  );
};
export default App;
