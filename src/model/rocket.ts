import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity('rocket')
export class Rocket {
    @Column("varchar", { length: 255 })
    name: string;
    @PrimaryColumn("varchar", { length: 255 })
    id: string;

    constructor(props: Omit<Rocket, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id)
            this.id = uuidv4();

    }
}