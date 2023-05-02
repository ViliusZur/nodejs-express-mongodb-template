import { Router } from "express";
import * as controller from "../controllers/test.controller";
import { logger } from "../config/winston";

const router = Router();

router.get("/", async (req, res) => {
  logger.info("test.route.js GET /test enpoint called");
  const response = await controller.getTest();
  res.send(response);
});

router.post("/", async (req, res) => {
  logger.info("test.route.js POST /test enpoint called");
  const response = await controller.postTest(req.body.testData);
  res.send(response);
});

export default router;
