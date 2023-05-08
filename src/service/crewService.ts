import { CreateCrewDTO } from "../dtos/createCrewDTO";
import { Crew } from "../model/crew";
import { CrewRepository } from "../repository/crewRepository";
import { CrewmanRepository } from "../repository/crewmanRepository";
import { GenericService } from "./crudService";

class CrewService implements GenericService<Crew, CreateCrewDTO>{

    private crewRepository: CrewRepository;
    private crewmanRepository: CrewmanRepository

    constructor(crewRepo: CrewRepository, crewmanRepo: CrewmanRepository){
        this.crewRepository = crewRepo;
        this.crewmanRepository = crewmanRepo;
    }
    async get(){
        return await this.crewRepository.findAll();
    }

    async getById(crewId: string) {
        const crew = this.crewRepository.findById(crewId);

        if (!crew)
            throw new Error('Resource not found');

        return crew;
    }

    async create(data: CreateCrewDTO){
        let crewmen = [];
        for (const crewmanId of data.crewmenIds){
            let crewman = (await this.crewmanRepository.findById(crewmanId));
            crewmen.push(crewman);
        }
        return this.crewRepository.create(data.id, data.name, crewmen);
    }

    async update(id: string, data: Partial<CreateCrewDTO>){
        const crew = await this.getById(id);
        
        let crewmen = [];
        for (const crewmanId of data.crewmenIds){
            let crewman = (await this.crewmanRepository.findById(crewmanId));
            crewmen.push(crewman);
        }

        if (crew)
            return this.crewRepository.update(crew, data.name, crewmen);
    }

    async delete(id: string){
        const crew = await this.getById(id);
        if (crew)
            await this.crewRepository.delete(id);
    }

}
export {
    CrewService
};