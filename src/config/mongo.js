import mongoose from "mongoose";
import Environment from "./environment";
import { logger } from "./winston";

export const connectMongo = async () => {
  await mongoose.connect(Environment.MONGO_URI);
  logger.info("Connected to MongoDB");
};
