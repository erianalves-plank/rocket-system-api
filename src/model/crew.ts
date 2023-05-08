import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Crewman } from "./crewman";
import { v4 as uuidv4 } from 'uuid';

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

    constructor(props: Omit<Crew, 'id'>, id?: string) {
        Object.assign(this, props);
        this.id = id;
        if (!id)
            this.id = uuidv4();

    }    
}
