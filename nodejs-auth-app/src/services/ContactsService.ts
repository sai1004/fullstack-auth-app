import { ContactsDAO } from "../daos/ContactsDAO";
import { Contacts } from "../entities/Contacts";
import { v4 as uuidv4 } from "uuid";

export class ContactsService {
    private ContactsDAO: ContactsDAO;

    constructor() {
        this.ContactsDAO = new ContactsDAO();
    }

    async save(data: Contacts) {
        try {
            let isValid = await this.validator(data);

            if (isValid) {
                let contactsData = await this.ContactsDAO.save(data);
                let returnData = {
                    id: data.id,
                    name: data.name,
                    message: "Saved Successfully!!",
                };
                return contactsData;
            } else {
                let returnData = { message: "Please enter valid data" };
                throw returnData;
            }
        } catch (error) {}
    }

    async findAll(filter: string) {
        try {
            let data: any = await this.ContactsDAO.findAll(filter);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async findOne(id: any) {
        try {
            let data: any = await this.ContactsDAO.findById(id);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async delete(id: any) {
        try {
            let data: Contacts = await this.ContactsDAO.findById(id);

            let result: any = await this.ContactsDAO.delete(data);

            let returnData = { id: id, message: "Removed Successfully" };

            return returnData;
        } catch (error) {
            throw error;
        }
    }

    async validator(item: Contacts) {
        if (!item.id || item.id == "" || item.id == "0") {
            let uid = uuidv4();
            item.id = uid;
        }
        return true;
    }
}
