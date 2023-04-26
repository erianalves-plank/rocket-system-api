import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('crewman')
export class Crewman {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    patent: string;

}