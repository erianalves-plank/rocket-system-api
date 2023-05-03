import { crewmanRepository } from "../repository"

class CrewmanService {

    async getCrewmen(){
        return await crewmanRepository.findAll();
    }

    async getCrewmanById(crewmanId: string) {
        const crewman = crewmanRepository.findById(crewmanId);

        if (!crewman)
            throw new Error('Resource not found');

        return crewman;
    }

    async createCrewman(id: string, name: string, patent: string){
        return crewmanRepository.create({id, name, patent});
    }

    async updateCrewman(id: string, name: string, patent: string){
        const crewman = await this.getCrewmanById(id);

        if (crewman)
            return crewmanRepository.update(crewman, name, patent);
    }

    async deleteCrewman(id: string){
        const crewman = await this.getCrewmanById(id);
        if (crewman)
            await crewmanRepository.delete(id);
    }

}
export {
    CrewmanService
};