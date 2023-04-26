import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Crewman } from "./crewman";
@Entity('crew')
export class Crew {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Crewman, {
        cascade: true,
    })
    @JoinTable()
    crewmen: Crewman[];
}
