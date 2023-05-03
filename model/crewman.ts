import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('crewman')
export class Crewman {
    @PrimaryColumn("varchar", { length: 255 })
    id: string;

    @Column("varchar", { length: 255 })
    name: string;

    @Column("varchar", { length: 255 })
    patent: string;

}