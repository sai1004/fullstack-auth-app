import { createConnection } from "typeorm";
import * as Config from "./config/config";
import { AuthController } from "./routes/AuthController";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const port = 3000;

const runServer = async () => {
    try {
        const db = await createConnection(Config.dbConfig);

        if (db.isConnected) {
            console.log(`____________ DB Connected ____________`);

            const authRoutes = new AuthController();

            app.use(express.urlencoded({ extended: false }));
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(logger("common"));
            app.use(cors());

            var whitelist = ["http://127.0.0.1:4200"];

            var corsOptionsDelegate = function (req: any, callback: any) {
                var corsOptions;
                if (whitelist.indexOf(req.header("Origin")) !== -1) {
                    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
                } else {
                    corsOptions = { origin: false }; // disable CORS for this request
                }
                callback(null, corsOptions); // callback expects two parameters: error and options
            };

            /* ''''''' App Routes ''''''''' */
            app.get("/api", (req: any, res: any) => {
                res.json({ message: " Hello App Works!! " });
            });

            app.use("/api/auth", authRoutes.getRouter());

            app.listen(port, (err: any) => {
                if (err) throw err;

                console.log(`
                ++++++++++++++++++++++++++++++++++++++++++++++++
                server is listening on http://127.0.0.1:${port}/api
                ++++++++++++++++++++++++++++++++++++++++++++++++
                `);
            });
        }
    } catch (error) {
        console.log(`Error While Starting Server : `, error.message);
    }
};

runServer();
