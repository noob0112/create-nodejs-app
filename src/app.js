const express = require("express");
const cors = require('cors')
require('dotenv').config()

const loaders = require("./loaders");
const logger = require('./utils/logger');
const { port } = require('./config')
// const path = require("path");

express().listen().close()

async function startServer() {
    const app = express();

    await loaders({ expressApp: app });

    //   app.use(express.static(path.join(__dirname, 'public')));


    app.listen(process.env.PORT || 3000, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        logger.info(`Server starting on port ${process.env.PORT}...`);
    });
}

startServer();
