import { Profile } from "../entities/Profile";
import { ProfileDAO } from "../daos/ProfileDAO";
import { hashSync, compareSync } from "bcryptjs";
import { App } from "../utils/App";

export class ProfileService {
    uniqueId: number = 0;

    private profileDao: ProfileDAO;

    constructor() {
        this.profileDao = new ProfileDAO();
    }

    async saveProfile(item: Profile) {
        try {
            let isValid = await this.validateUser(item);
            if (isValid == true) {
                item.password = this.HashSync(item.password);
                item.token = "dksjhdkfhsdfkjhsldjkfhskdjfhsd";
                let newProfile: any = await this.profileDao.save(item);
                let returnData = {
                    id: item.id,
                    message: "Saved Successfully",
                };
                return returnData;
            } else if (isValid == "Email") {
                let returnData = { message: "Email Already Exists!" };
                throw returnData;
            } else {
                throw { message: "INVALID DATA" };
            }
        } catch (error) {
            throw error;
        }
    }

    HashSync(data: string) {
        return hashSync(data, 8);
    }

    async validateUser(item: Profile) {
        let oldProfile = null;
        // check profile id
        if (!item.id || item.id == "0" || item.id == "") {
            item.id = null;
        } else {
            oldProfile = await this.profileDao.findOne(item.id);
        }

        // get email
        let email: any = await this.profileDao.search({ email: item.email });

        // check email
        if (!item.id) {
            if (item.email != email) {
                let uid = App.UniqueCode();
                item.id = uid;
            } else {
                return "Email";
            }
        }

        item.updatedBy = "system";
        let date = new Date().toISOString();
        item.updatedOn = new Date(date);
        return true;
    }
}
