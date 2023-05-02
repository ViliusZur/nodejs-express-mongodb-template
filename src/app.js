import { startServer } from "./config/express";
import { connectMongo } from "./config/mongo";

const start = async () => {
  await connectMongo();
  await startServer();
};

start();
