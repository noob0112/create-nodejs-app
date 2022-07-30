const bodyParser = require("body-parser");
const path = require('path');
const cors = require("cors");
// const { engine } = require("express-handlebars");

module.exports = async (app) => {
    app.get("/status", (req, res) => {
        res.status(200).end();
    });
    app.head("/status", (req, res) => {
        res.status(200).end();
    });
    app.enable("trust proxy");

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false, limit: "20mb" }));
    app.use(bodyParser.json({ limit: "20mb" }));
    
    // app.engine("hbs", engine({
    //     extname: '.hbs'
    // }));
    // app.set("view engine", "hbs");
    // app.set("views", "./src/views");

    // app.get('/', (req, res) => {
    //     res.render('pages/home')
    // })

    return app;
};
