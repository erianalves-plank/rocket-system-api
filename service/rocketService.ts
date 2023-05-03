import { rocketRepository } from "../repository";

class RocketService {

    async getRockets() {
        return await rocketRepository.findAll();
    }

    async getRocketById(rocketId : string){
        const rocket = rocketRepository.findById(rocketId);

        if (!rocket)
            throw new Error('Resource not found.');

        return rocket;
    }

    async createRocket(id: string, name: string) {
        return rocketRepository.create({id, name});
    }

    async updateRocket(id: string, name: string){
        const rocket = await this.getRocketById(id);

        if (rocket)
            return rocketRepository.update(rocket, name);
    
    }

    async deleteRocket(id: string){
        const rocket = await this.getRocketById(id); 
        if (rocket)
            await rocketRepository.delete(id);
    }

}
export {
    RocketService
};