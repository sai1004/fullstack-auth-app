import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("profile")
export class Profile {
    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "email" })
    email: string;

    @Column({ name: "password" })
    password: string;

    @Column({ name: "mobile" })
    mobile: string;

    @Column({ name: "token" })
    token: string;

    @Column({ name: "created_by" })
    createdBy: string;

    @Column({ name: "created_on" })
    createdOn: Date;

    @Column({ name: "updated_by" })
    updatedBy: string;

    @Column({ name: "updated_on" })
    updatedOn: Date;
}
