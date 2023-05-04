import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

import { Rocket } from "./rocket";
import { Crew } from "./crew";
@Entity('launch')
export class Launch {
    @PrimaryColumn("varchar", { length: 255 })
    id: string;

    @Column("varchar", { length: 255 })
    launchCode: string;
    
    @Column("varchar", { length: 100 })
    date: string;
    
    @Column({ type: "boolean" })
    success: boolean;
    
    @OneToOne(() => Rocket)
    @JoinColumn()
    rocket: Rocket;
     
    @OneToOne(() => Crew)
    @JoinColumn()
    crew?: Crew;

    constructor(props: Omit<Launch, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id)
            this.id = uuidv4();

    }

}