import { Profile } from "../entities/Profile";
import { ProfileDAO } from "../daos/ProfileDAO";
import { ProfileService } from "./ProfileService";
import { App } from "../utils/App";

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

    async signin(reqData: any) {
        try {
            let query = { email: reqData.email };
            let profileObj: Profile = await this.profileDao.findOne(query);
            let isAuthValid: any = false;

            if (profileObj == null || reqData.password == null) {
                return { message: "Invalid Credentials" };
            } else {
                isAuthValid = App.HashCompareSync(reqData.password, profileObj.password);

                if (isAuthValid) {
                    return this.reteriveProfileDetails(profileObj.id);
                } else {
                    return { message: "Invalid Credentials" };
                }
            }
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
                responseData.identity = {};
                responseData.identity.id = profileObj.id;
                responseData.identity.name = profileObj.name;
                responseData.identity.email = profileObj.email;
                responseData.identity.mobile = profileObj.mobile;

                responseData.access_token = App.EncodeJWT(responseData);
            } else {
                return { message: " Profile Not Found " };
            }
            return responseData;
        } catch (error) {
            throw error;
        }
    }
}
