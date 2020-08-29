import express from "express";
import { initialize } from "express-openapi";
import path from "path";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";

import v1ApiDoc from "./api-server/v1/api-doc";
    console.log(path.resolve(__dirname, "api-server/v1/paths"));

export default (app) => {

    app.use(bodyParser.json());

    app.use(
    "/api/ui",
    swaggerUi.serve,
    swaggerUi.setup(null, {
        swaggerOptions: { url: "/api/api-docs" },
    })
    );

initialize({
  app,
  apiDoc: v1ApiDoc,
  promiseMode: true,
  dependencies: {
  },
  paths: [
      {
          path: '/battle/{battle_id}',
          module: require('../../../src/server/api-server/v1/paths/battle/__battle_id__')
      }
  ],
  routesGlob: "**/*.js",
  pathsIgnore: new RegExp("test$"),
} );

    return app;
}
