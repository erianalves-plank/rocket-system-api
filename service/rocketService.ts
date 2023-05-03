import { RocketRepository } from "../repository/rocketRepository";

class RocketService {

    private rocketRepository : RocketRepository;

    constructor(rocketRepository: RocketRepository) {
        this.rocketRepository = rocketRepository;
    }

    async getRockets() {
        return await this.rocketRepository.findAll();
    }

    async getRocketById(rocketId : string){
        const rocket = this.rocketRepository.findById(rocketId);

        if (!rocket)
            throw new Error('Resource not found.');

        return rocket;
    }

    async createRocket(id: string, name: string) {
        return this.rocketRepository.create({id, name});
    }

    async updateRocket(id: string, name: string){
        const rocket = await this.getRocketById(id);

        if (rocket)
            return this.rocketRepository.update(rocket, name);
    
    }

    async deleteRocket(id: string){
        const rocket = await this.getRocketById(id); 
        if (rocket)
            await this.rocketRepository.delete(id);
    }

}
export {
    RocketService
};