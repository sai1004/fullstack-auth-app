import { Router } from "express";
import { Contacts } from "../entities/Contacts";
import { ContactsService } from "../services/ContactsService";
import { App } from "../utils/App";

export class ContactsController {
    private router: Router = Router();
    private service = new ContactsService();

    getRouter(): Router {
        this.router.put("/create", App.verifyToken, async (req: any, res: any) => {
            try {
                let reqData = req.body ? req.body : {};
                let result = null;
                console.log("reqData", req.body);
                result = await this.service.save(reqData);
                res.send({ status: 1, data: result });
            } catch (error) {
                console.log(error);
                res.send({ status: 0, error: error });
            }
        });

        this.router.get("/list", App.verifyToken, async (req: any, res: any) => {
            try {
                let reqData: any = req.query ? req.query : {};

                let result: Contacts = null;

                result = await this.service.findAll(reqData);

                res.send({ status: 1, data: result });
            } catch (error) {
                res.send({ status: 0, error: error });
            }
        });

        this.router.get("/:id", App.verifyToken, async (req: any, res: any) => {
            try {
                let reqData: any;
                let result: Contacts = null;

                reqData = req.params.id;

                if (reqData) {
                    result = await this.service.findOne(reqData);
                } else {
                    throw new Error("Somthing went worng please try again");
                }
                res.send({ status: 1, data: result });
            } catch (error) {
                res.send({ status: 0, error: error });
            }
        });

        this.router.delete("/:id", App.verifyToken, async (req: any, res: any) => {
            try {
                let reqData: any;
                let result = null;
                reqData = req.params.id;
                if (reqData) {
                    result = await this.service.delete(reqData);
                } else {
                    throw new Error("Somthing went worng please try again");
                }
                res.send({ status: 1, data: result });
            } catch (error) {
                res.send({ status: 0, error: error });
            }
        });

        return this.router;
    }
}
