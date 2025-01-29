import { getRepository, Repository } from "typeorm";
import { Profile } from "../entities/Profile";

export class ProfileDAO {
    private dao: Repository<Profile>;

    constructor() {
        this.dao = getRepository(Profile);
    }

    async search(data: any) {
        return await this.dao.createQueryBuilder("profile").orderBy("profile.updatedOn", "DESC").where(data).getMany();
    }

    async save(data: any) {
        return await this.dao.save(data);
    }

    async entity(id: string) {
        return await this.dao.findOne(id);
    }

    async delete(data: Profile) {
        return await this.dao.remove([data]);
    }

    async findOne(data: any) {
        return await this.dao.findOne(data);
    }
}
