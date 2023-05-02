import dotenv from "dotenv";
dotenv.config();

const Environment = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  LOG_LEVEL: process.env.LOG_LEVEL,
};

export default Environment;
