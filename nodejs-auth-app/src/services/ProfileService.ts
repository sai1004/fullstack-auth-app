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
            let isValid = await this.validateProfile(item);
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

    async validateProfile(item: Profile) {
        let returnVal: any;

        let oldProfile = null;
        // check profile id
        if (!item.id || item.id == "0" || item.id == "") {
            item.id = null;
        } else {
            oldProfile = await this.profileDao.findOne(item.id);
        }

        // get email if exists in array
        let profiles: any = await this.profileDao.search({ email: item.email });

        // if id not exists
        if (!item.id) {
            // check profile
            if (profiles.length > 0) {
                returnVal = "Email";
            } else {
                // genrate new id and profile if there is no old record associated with current email
                let uid = App.UniqueCode();
                item.id = uid;
                returnVal = true;
            }
        }

        item.updatedBy = "system";
        let date = new Date().toISOString();
        item.updatedOn = new Date(date);

        return returnVal;
    }
}
