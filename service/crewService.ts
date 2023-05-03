import { crewRepository, crewmanRepository } from "../repository";

class CrewService {

    async getCrews(){
        return await crewRepository.findAll();
    }

    async getCrewById(crewId: string) {
        const crew = crewRepository.findById(crewId);

        if (!crew)
            throw new Error('Resource not found');

        return crew;
    }

    async createCrew(id: string, name: string, crewmenIds: string[]){
        let crewmen = [];
        for (const crewmanId of crewmenIds){
            let crewman = (await crewmanRepository.findById(crewmanId));
            crewmen.push(crewman);
        }
        return crewRepository.create({id, name, crewmen});
    }

    async updateCrew(id: string, name: string, crewmenIds: string[]){
        const crew = await this.getCrewById(id);
        
        let crewmen = [];
        for (const crewmanId of crewmenIds){
            let crewman = (await crewmanRepository.findById(crewmanId));
            crewmen.push(crewman);
        }

        if (crew)
            return crewRepository.update(crew, name, crewmen);
    }

    async deleteCrew(id: string){
        const crew = await this.getCrewById(id);
        if (crew)
            await crewRepository.delete(id);
    }

}
export {
    CrewService
};