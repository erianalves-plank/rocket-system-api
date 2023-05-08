import { Crewman } from "../model/crewman";
import { CrewmanRepository } from "../repository/crewmanRepository";
import { GenericService } from "./crudService";

class CrewmanService implements GenericService<Crewman>{

    private crewmanRepository: CrewmanRepository;

    constructor(crewmanRepo: CrewmanRepository){
        this.crewmanRepository = crewmanRepo;
    }

    async get(){
        return await this.crewmanRepository.findAll();
    }

    async getById(crewmanId: string) {
        const crewman = await this.crewmanRepository.findById(crewmanId);
        //console.log('------_>>>>>> ' + crewman);
        if (!crewman)
            throw new Error('Resource not found.');

        return crewman;
    }

    async create(data: Crewman){
        return await this.crewmanRepository.create(data);
    }

    async update(id: string, data: Partial<Crewman>){
        const crewman = await this.getById(id);

        if (crewman)
            return this.crewmanRepository.update(crewman, data.name, data.patent);
    }

    async delete(id: string){
        const crewman = await this.getById(id);
        if (crewman)
            await this.crewmanRepository.delete(id);
    }

}
export {
    CrewmanService
};