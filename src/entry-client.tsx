import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes";

ReactDOM.hydrateRoot(
  document.getElementById("root")!,
  <Fragment>
    <React.StrictMode>
      <RouterProvider router={createBrowserRouter(routes)} />
    </React.StrictMode>
  </Fragment>
);
