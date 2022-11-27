import express from "express";
// const cors = require('cors')
import dotenv from "dotenv";
dotenv.config();

import loaders from "./loaders/index.js";
import logger from "./utils/logger.js";
// const path = require("path");
import route from "./routes";
import errorHandler from "./utils/error-exception"

express().listen().close()

async function startServer() {
    const app = express();

    await loaders({ expressApp: app });

    route({ expressApp: app });

    app.use(errorHandler)

    app.listen(process.env.PORT || 3000, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        logger.info(`Server starting on port ${process.env.PORT}...`);
    });
}

startServer();
