import AppDataSource from "../../ormconfig";
import { Crew } from "../model/crew";
import { Crewman } from "../model/crewman";

class CrewRepository {

    private repository = AppDataSource.getRepository(Crew);

    async findAll() {
        const crews = await this.repository.find({
            relations: {
                crewmen: true,
            },
        });
        return crews;
    }

    async findById(crewId : string){
        const crew = await this.repository.findOneBy({id: crewId});
        return crew;
    }

    async create( id: string, name: string, crewmen: Crewman[]){
        const crew = this.repository.create({
            id,
            name,
            crewmen,
        });

        await this.repository.save(crew);
        return crew;
    }

    async update(crew: Crew, name : string, crewmen: Crewman[]){
        crew.name = name;
        crew.crewmen = crewmen;

        await this.repository.save(crew);

        return crew;
    }

    async delete(crewId : string){
        return await this.repository.delete(crewId);
    }
}

export {
    CrewRepository
};