import express from "express";
import cors from "cors";
import Environment from "./environment";
import routes from "../routes";
import { logger } from "./winston";

export const startServer = async () => {
  const app = express();

  // application-wide middlewares
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // routes
  app.use("/test", routes.test);

  app.listen(Environment.PORT, () => {
    logger.info(`Example app listening on port ${Environment.PORT}`);
  });
};
