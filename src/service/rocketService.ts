import { Rocket } from "../model/rocket";
import { RocketRepository } from "../repository/rocketRepository";
import { GenericService } from "./crudService";

class RocketService implements GenericService<Rocket> {

    private rocketRepository: RocketRepository;

    constructor(rocketRepository: RocketRepository){
        this.rocketRepository = rocketRepository;
    }

    async get() {
        return await this.rocketRepository.findAll();
    }

    async getById(rocketId: string) {
        const rocket = await this.rocketRepository.findById(rocketId);
        if (!rocket)
            throw new Error('Resource not found.');

        return rocket;
    }

    async create(data: Rocket) {
        return this.rocketRepository.create(data);
    }

    async update(id: string, data: Partial<Rocket>) {
        const rocket = await this.getById(id);

        if (rocket)
            return this.rocketRepository.update(rocket, data.name);
    }

    async delete(id: string) {
        const rocket = await this.getById(id);
        if (rocket)
            await this.rocketRepository.delete(id);
    }

}
export {
    RocketService
};