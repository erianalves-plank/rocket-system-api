import { Crewman } from "../model/crewman";
import AppDataSource from "../datasource/dataSource";


const crewmanRepository = AppDataSource.getRepository(Crewman);

class CrewmanService {

    async execute({ name, patent }: Partial<Crewman>): Promise<Crewman | Error> {
        const crewman = crewmanRepository.create({
            name,
            patent,
        });
        await crewmanRepository.save(crewman);

        return crewman;
    }

    async getAllCrewmen() {
        const crewmen = await crewmanRepository.find();
        return crewmen;
    }

    async delete(crewmanId: string){
        if (!(await crewmanRepository.findOneBy({id: parseInt(crewmanId)})))
            return new Error("Crewman not found");

        await crewmanRepository.delete(crewmanId);
    }

    async update({id, name, patent} : Partial<Crewman>){
        const crewman = await crewmanRepository.findOneBy({id: id});
        if (!crewman)
            return new Error("Crewman not found");
        
        crewman.name = name;
        crewman.patent = patent;

        await crewmanRepository.save(crewman);

        return crewman;
    }

}
export {
    CrewmanService
};