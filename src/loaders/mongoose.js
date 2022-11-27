import mongoose from "mongoose";
import mongoConfig from "../config/mongodb";
import logger from "../utils/logger";

export default async () => {
  try {
    await mongoose.connect(mongoConfig.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    logger.error(`[MongoDB]: ${err.message}`);
    process.exit(1);
  }
};
