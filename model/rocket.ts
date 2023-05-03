import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('rocket')
export class Rocket {
    @Column("varchar", { length: 255 })
    name: string;
    @PrimaryColumn("varchar", { length: 255 })
    id: string;
}