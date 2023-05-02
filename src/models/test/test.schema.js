import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  testData: {
    required: true,
    type: String,
  },
});

export default TestSchema;
