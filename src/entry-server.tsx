import React, { Fragment } from "react";
import ReactDOMServer from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import routes from "./routes";

export async function render(req: any) {
  const { query, dataRoutes } = createStaticHandler(routes);
  const context = await query(new Request("https://naver.com"));

  if (context instanceof Response) throw context;

  const router = createStaticRouter(dataRoutes, context);

  const html = ReactDOMServer.renderToString(
    <Fragment>
      <React.StrictMode>
        <StaticRouterProvider router={router} context={context} />
      </React.StrictMode>
    </Fragment>
  );
  return { html };
}
