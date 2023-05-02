import mongoose from "mongoose";
import TestSchema from "./test.schema";

export default mongoose.model("Test", TestSchema, "tests");
