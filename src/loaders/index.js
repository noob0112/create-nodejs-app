import expressLoader from "./express";
import mongooseLoader from "./mongoose";
import logger from "../utils/logger";

export default async ({ expressApp }) => {
    await mongooseLoader();
    logger.info('MongoDB Initialized');

    await expressLoader(expressApp);
    logger.info('Express Initialized');
}