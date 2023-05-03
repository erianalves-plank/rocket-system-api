import { CrewmanRepository } from "../repository/crewmanRepository"

class CrewmanService {

    private crewmanRepository: CrewmanRepository;

    constructor(crewmanRepository: CrewmanRepository){
        this.crewmanRepository = crewmanRepository;
    }

    async getCrewmen(){
        return await this.crewmanRepository.findAll();
    }

    async getCrewmanById(crewmanId: string) {
        const crewman = this.crewmanRepository.findById(crewmanId);

        if (!crewman)
            throw new Error('Resource not found');

        return crewman;
    }

    async createCrewman(id: string, name: string, patent: string){
        return this.crewmanRepository.create({id, name, patent});
    }

    async updateCrewman(id: string, name: string, patent: string){
        const crewman = await this.getCrewmanById(id);

        if (crewman)
            return this.crewmanRepository.update(crewman, name, patent);
    }

    async deleteCrewman(id: string){
        const crewman = await this.getCrewmanById(id);
        if (crewman)
            await this.crewmanRepository.delete(id);
    }

}
export {
    CrewmanService
};