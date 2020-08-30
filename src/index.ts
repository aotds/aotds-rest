import express from "express";
import { initialize } from "express-openapi";
import path from "path";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import boom from 'express-boom';

import Battles from './services/battles';
import v1ApiDoc from "./api/api-doc";

type Config = {
  prefix: string;
  pouch_root: string;
};

export default (config: Config) => {
  const app = express();

  app.use(boom());

  app.use(bodyParser.json());

  app.use(
    `${config.prefix}/ui`,
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: { url: `${config.prefix}/api-docs` },
    })
  );

  const battles = new Battles(config);

  initialize({
    app,
    apiDoc: v1ApiDoc(config),
    promiseMode: true,
    dependencies: { battles },
    paths: __dirname + "/api/paths",
    routesGlob: "**/*.{t,j}s",
    pathsIgnore: new RegExp("test$"),
  });

  return app;
};
