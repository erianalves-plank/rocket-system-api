import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Rocket } from "./rocket";
import { Crew } from "./crew";
@Entity('launch')
export class Launch {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    launchCode: string;
    
    @Column()
    date: string;
    
    @Column()
    success: boolean;
    
    @OneToOne(() => Rocket)
    @JoinColumn()
    rocket: Rocket;
     
    @OneToOne(() => Crew)
    @JoinColumn()
    crew?: Crew;

}