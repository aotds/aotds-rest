import express from "express";
import { initialize } from "express-openapi";
import path from "path";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";

import v1ApiDoc from "./api/api-doc";

type Config = {
    prefix: string;
}

export default (config: Config) => {

    const app = express();

    app.use(bodyParser.json());

    app.use(
    "/ui",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: { url: `${config.prefix}/api-docs` },
    })
    );


initialize({
  app,
  apiDoc: v1ApiDoc(config),
  promiseMode: true,
  dependencies: {
  },
  paths: './dist/api/paths',
  routesGlob: "**/*.{t,j}s",
  pathsIgnore: new RegExp("test$"),
} );

    return app;
}
