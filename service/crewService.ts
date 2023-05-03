import { CrewRepository } from "../repository/crewRepository"
import { CrewmanRepository } from "../repository/crewmanRepository";

class CrewService {

    private crewRepository: CrewRepository;
    private crewmanRepository: CrewmanRepository;

    constructor(crewRepository: CrewRepository, crewmanRepository: CrewmanRepository){
        this.crewRepository = crewRepository;
        this.crewmanRepository = crewmanRepository;
    }

    async getCrews(){
        return await this.crewRepository.findAll();
    }

    async getCrewById(crewId: string) {
        const crew = this.crewRepository.findById(crewId);

        if (!crew)
            throw new Error('Resource not found');

        return crew;
    }

    async createCrew(id: string, name: string, crewmenIds: string[]){
        let crewmen = [];
        for (const crewmanId of crewmenIds){
            let crewman = (await this.crewmanRepository.findById(crewmanId));
            crewmen.push(crewman);
        }
        return this.crewRepository.create({id, name, crewmen});
    }

    async updateCrew(id: string, name: string, crewmenIds: string[]){
        const crew = await this.getCrewById(id);
        
        let crewmen = [];
        for (const crewmanId of crewmenIds){
            let crewman = (await this.crewmanRepository.findById(crewmanId));
            crewmen.push(crewman);
        }

        if (crew)
            return this.crewRepository.update(crew, name, crewmen);
    }

    async deleteCrew(id: string){
        const crew = await this.getCrewById(id);
        if (crew)
            await this.crewRepository.delete(id);
    }

}
export {
    CrewService
};