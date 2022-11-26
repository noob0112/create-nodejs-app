import express from "express";
// const cors = require('cors')
import dotenv from "dotenv";
dotenv.config();

import loaders from "./loaders/index.js";
import logger from "./utils/logger.js";
// const path = require("path");

express().listen().close()

async function startServer() {
    const app = express();

    await loaders({ expressApp: app });

    // app.use(express.static(path.join(__dirname, 'public')));


    app.listen(process.env.PORT || 3000, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        logger.info(`Server starting on port ${process.env.PORT}...`);
    });
}

startServer();
