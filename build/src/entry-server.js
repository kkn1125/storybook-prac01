import { jsx as _jsx } from "react/jsx-runtime";
import React, { Fragment } from "react";
import ReactDOMServer from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider, } from "react-router-dom/server";
import routes from "./routes";
export async function render(_req) {
    const { query, dataRoutes } = createStaticHandler(routes);
    const context = await query(new Request("https://naver.com"));
    if (context instanceof Response)
        throw context;
    const router = createStaticRouter(dataRoutes, context);
    const html = ReactDOMServer.renderToString(_jsx(Fragment, { children: _jsx(React.StrictMode, { children: _jsx(StaticRouterProvider, { router: router, context: context }) }) }));
    return { html };
}
