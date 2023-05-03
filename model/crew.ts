import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Crewman } from "./crewman";
@Entity('crew')
export class Crew {

    @PrimaryColumn("varchar", { length: 255 })
    id: string;

    @Column("varchar", { length: 255 })
    name: string;

    @ManyToMany(() => Crewman, {
        cascade: true,
    })
    @JoinTable()
    crewmen: Crewman[];
}
