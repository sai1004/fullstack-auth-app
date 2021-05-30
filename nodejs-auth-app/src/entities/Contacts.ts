import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("contacts")
export class Contacts {
    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "picture" })
    picture: string;

    @Column({ name: "company" })
    company: string;

    @Column({ name: "title" })
    title: string;

    @Column({ name: "mobile" })
    mobile: string;

    @Column({ name: "work" })
    work: string;

    @Column({ name: "email" })
    email: string;

    @Column({ name: "dob" })
    dob: string;

    @Column({ name: "notes" })
    notes: string;

    @Column({ name: "created_by" })
    createdBy: string;

    @Column({ name: "created_on" })
    createdOn: Date;

    @Column({ name: "updated_by" })
    updatedBy: string;

    @Column({ name: "updated_on" })
    updatedOn: Date;
}
