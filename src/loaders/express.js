import bodyParser from "body-parser";
import cors from "cors";

export default async (app) => {
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

    return app;
};
