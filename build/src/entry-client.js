import { jsx as _jsx } from "react/jsx-runtime";
import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes";
ReactDOM.hydrateRoot(document.getElementById("root"), _jsx(Fragment, { children: _jsx(React.StrictMode, { children: _jsx(RouterProvider, { router: createBrowserRouter(routes) }) }) }));
