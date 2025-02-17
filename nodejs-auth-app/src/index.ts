import { createConnection } from "typeorm";
import * as Config from "./config/config";
import { AuthController } from "./routes/AuthController";
import { ContactsController } from "../src/routes/ContactsController";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");
const rateLimiter = require("express-rate-limit");
const cors = require("cors");
const xss = require("xss-clean");
const hpp = require("hpp");
dotenv.config();

const port = process.env.PORT || 5000;

const ratelimit = rateLimiter({
    windowsMs: 5 * 60 * 100,
    max: 5, // 5 times allowed
    message: { status: 0, message: "Too many requests, please try again later." },
});

const runServer = async () => {
    try {
        const db = await createConnection(Config.dbConfig);

        if (db.isConnected) {
            console.log(`____________ DB Connected ____________`);

            const authRoutes = new AuthController();
            const contactsRoutes = new ContactsController();

            // Prevent XSS attacks
            app.use(xss());
            app.use(express.urlencoded({ extended: false }));
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(logger("common"));

            // Set security headers
            app.use(helmet());

            app.use(cors());

            // Prevent http param pollution
            app.use(hpp());

            /* ''''''' App Routes ''''''''' */
            app.get("/api", (req: any, res: any) => {
                res.json({ message: " Hello App Works!! " });
            });

            app.use("/api/auth", ratelimit, authRoutes.getRouter());

            app.use("/api/contacts", contactsRoutes.getRouter());

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
