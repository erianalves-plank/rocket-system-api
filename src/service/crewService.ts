import { CreateCrewDTO } from "../dtos/createCrewDTO";
import { Crew } from "../model/crew";
import { crewRepository, crewmanRepository } from "../repository";
import { GenericService } from "./crudService";

class CrewService implements GenericService<Crew, CreateCrewDTO>{

    async get(){
        return await crewRepository.findAll();
    }

    async getById(crewId: string) {
        const crew = crewRepository.findById(crewId);

        if (!crew)
            throw new Error('Resource not found');

        return crew;
    }

    async create(data: CreateCrewDTO){
        let crewmen = [];
        for (const crewmanId of data.crewmenIds){
            let crewman = (await crewmanRepository.findById(crewmanId));
            crewmen.push(crewman);
        }
        return crewRepository.create(data.id, data.name, crewmen);
    }

    async update(id: string, data: Partial<CreateCrewDTO>){
        const crew = await this.getById(id);
        
        let crewmen = [];
        for (const crewmanId of data.crewmenIds){
            let crewman = (await crewmanRepository.findById(crewmanId));
            crewmen.push(crewman);
        }

        if (crew)
            return crewRepository.update(crew, data.name, crewmen);
    }

    async delete(id: string){
        const crew = await this.getById(id);
        if (crew)
            await crewRepository.delete(id);
    }

}
export {
    CrewService
};