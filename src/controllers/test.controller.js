import Test from "../models/test/test.model";
import { logger } from "../config/winston";

export const getTest = async () => {
  logger.info("test.controller - getTest START");
  try {
    return Test.find();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postTest = async (testData) => {
  logger.info("test.controller - postTest START");
  try {
    const test = new Test({
      testData,
    });
    await test.save();
    return test;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
