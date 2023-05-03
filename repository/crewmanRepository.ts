import AppDataSource from "../ormconfig";
import { Crewman } from "../model/crewman";

class CrewmanRepository {

    private repository = AppDataSource.getRepository(Crewman);

    async findAll() {
        const crewmen = await this.repository.find();
        return crewmen;
    }

    async findById(crewmanId : string){
        const crewman = await this.repository.findOneBy({id: crewmanId});
        return crewman;
    }

    async create({ id, name, patent }: Crewman){
        const crewman = this.repository.create({
            id,
            name,
            patent,
        });

        await this.repository.save(crewman);
        return crewman;
    }

    async update(crewman: Crewman, name : string, patent: string){
        crewman.name = name;
        crewman.patent = patent;

        await this.repository.save(crewman);

        return crewman;
    }

    async delete(crewmanId : string){
        return await this.repository.delete(crewmanId);
    }
}

export {
    CrewmanRepository
};