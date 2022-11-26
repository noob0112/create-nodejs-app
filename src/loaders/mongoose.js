import mongoose from "mongoose";
import configMongodb from "../config/mongodb";
import logger from "../utils/logger";

module.exports = async () => {
    try {
        await mongoose.connect(
            mongoUri,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
    } catch (err) {
        logger.error(`[MongoDB]: ${err.message}`);
        process.exit(1);
    }
}