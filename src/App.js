import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/routes/main/Main";
import Navbar from "./components/navbar/Navbar";
import store from "./redux/store";
import GamePage from "./components/routes/gamePage/GamePage";
import { ErrorPage } from "./components/routes/errorPage/ErrorPage";

/**
 * Router for the many pages
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Main />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "game/:gameId",
    element: (
      <>
        <Navbar />
        <GamePage />
      </>
    ),
  },
]);

/**
 *
 * @returns Whole App
 */
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
export default App;
