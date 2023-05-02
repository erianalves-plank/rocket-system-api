import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('rocket')
export class Rocket {
    @Column()
    name: string;
    @PrimaryColumn("varchar", { length: 255 })
    id: string;
}