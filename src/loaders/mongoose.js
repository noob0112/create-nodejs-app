const mongoose = require("mongoose");
const { mongoUri } = require("../config/mongodb");
const logger = require("../utils/logger");

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