import { getRepository, Repository } from "typeorm";
import { Contacts } from "../entities/Contacts";

export class ContactsDAO {
    private dao: Repository<Contacts>;

    constructor() {
        this.dao = getRepository(Contacts);
    }

    async save(data: Contacts) {
        return await this.dao.save(data);
    }

    async findAll(data: any) {
        return await this.dao.find(data);
    }

    async findOne(data: any) {
        return await this.dao.findOne(data);
    }

    async findById(id: string) {
        return await this.dao.findOne(id);
    }

    async delete(data: Contacts) {
        return await this.dao.remove(data);
    }
}
