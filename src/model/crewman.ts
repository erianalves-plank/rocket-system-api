import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity('crewman')
export class Crewman {
    @PrimaryColumn("varchar", { length: 255 })
    id: string;

    @Column("varchar", { length: 255 })
    name: string;

    @Column("varchar", { length: 255 })
    patent: string;

    constructor(props: Omit<Crewman, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id)
            this.id = uuidv4();

    }
}