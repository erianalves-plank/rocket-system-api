import { Crewman } from "../model/crewman";
import { crewmanRepository } from "../repository"
import { GenericService } from "./crudService";

class CrewmanService implements GenericService<Crewman>{

    async get(){
        return await crewmanRepository.findAll();
    }

    async getById(crewmanId: string) {
        const crewman = crewmanRepository.findById(crewmanId);

        if (!crewman)
            throw new Error('Resource not found');

        return crewman;
    }

    async create(data: Crewman){
        return crewmanRepository.create(data);
    }

    async update(id: string, data: Partial<Crewman>){
        const crewman = await this.getById(id);

        if (crewman)
            return crewmanRepository.update(crewman, data.name, data.patent);
    }

    async delete(id: string){
        const crewman = await this.getById(id);
        if (crewman)
            await crewmanRepository.delete(id);
    }

}
export {
    CrewmanService
};