import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

export const setupSwagger = (app: express.Application) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};