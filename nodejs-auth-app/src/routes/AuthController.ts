import { Router } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
    private router: Router = Router();
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    getRouter(): Router {
        this.router.post("/signup", async (req: any, res: any) => {
            try {
                let reqData: any = req.body;
                let result: any = null;

                if (reqData) {
                    result = await this.authService.signup(reqData.data);
                    if (result.access_token) {
                        res.status(200).send(result);
                    } else {
                        res.status(401).send({ status: 0, message: "Invalid Credentials" });
                    }
                } else {
                    throw { message: "Invalid Data" };
                }
            } catch (error) {
                res.status(403).send({ status: 0, error: error.message });
            }
        });

        this.router.post("/signin", async (req: any, res: any) => {
            try {
                let reqData: any = req.body;
                let result: any = null;

                if (reqData) {
                    result = await this.authService.signin(reqData);

                    if (result.access_token) {
                        res.status(200).send(result);
                    } else {
                        res.status(401).send({ status: 0, message: "Invalid Credentials" });
                    }
                } else {
                    res.status(401).send({ status: 0, message: "Invalid Data" });
                }
            } catch (error) {
                res.send({ status: 0, error: error.message });
            }
        });

        return this.router;
    }
}
