import { Profile } from "../entities/Profile";
import { ProfileDAO } from "../daos/ProfileDAO";
import { ProfileService } from "./ProfileService";
import * as jwt from "jsonwebtoken";
import * as Config from "../config/config";

export class AuthService {
    private profileDao: ProfileDAO;
    private profileService: ProfileService;

    constructor() {
        this.profileDao = new ProfileDAO();
        this.profileService = new ProfileService();
    }

    async signup(reqData: any) {
        try {
            // save new user
            let data = await this.profileService.saveProfile(reqData);

            // genrate new jwt token
            data = await this.reteriveProfileDetails(data.id);

            return data;
        } catch (error) {
            throw error;
        }
    }

    async reteriveProfileDetails(userId: any) {
        try {
            let responseData: any = {};
            let query = { id: userId };

            let profileObj: Profile = await this.profileDao.findOne(query);

            if (profileObj != null) {
                responseData.profile = {};
                responseData.profile.id = profileObj.id;
                responseData.name = profileObj.name;
                responseData.email = profileObj.email;
                responseData.mobile = profileObj.mobile;
                responseData.identity = {};
                responseData.identity = responseData.profile;
                delete responseData.profile;

                responseData.access_token = this.generateEncodeJWT(responseData);
            } else {
                throw { message: " Profile Not Found " };
            }
            return responseData;
        } catch (error) {
            throw error;
        }
    }

    generateEncodeJWT(data: any) {
        return jwt.sign(data, Config.token, { expiresIn: "24h" });
    }
}
