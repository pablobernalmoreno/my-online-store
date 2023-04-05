import { useRouteError } from "react-router-dom";

/**
 * Error page
 * @component
 * @returns {Component} Error page
 */
export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, this is not the page you are looking for.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
