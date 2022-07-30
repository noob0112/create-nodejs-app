const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');
// const route = require('../routes');
const config = require('../config');
const logger = require('../utils/logger');

module.exports = async ({ expressApp }) => {
    await mongooseLoader();
    logger.info('MongoDB Initialized');

    await expressLoader(expressApp);
    logger.info('Express Initialized');

    //   await route(expressApp);
    //   console.log('Routes Initialized');
}