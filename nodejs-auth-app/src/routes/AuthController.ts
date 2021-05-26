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
                } else {
                    throw { message: "Invalid Data" };
                }
                res.send({ status: 1, data: result });
            } catch (error) {
                res.send({ status: 0, error: error });
            }
        });

        this.router.post("/signin", async (req: any, res: any) => {
            try {
                let reqData: any = req.body;
                let result: any = null;

                if (reqData) {
                    result = await this.authService.signin(reqData);
                } else {
                    throw { message: "Invalid Data" };
                }
                res.send(result);
            } catch (error) {
                res.send({ status: 0, error: error });
            }
        });

        return this.router;
    }
}
