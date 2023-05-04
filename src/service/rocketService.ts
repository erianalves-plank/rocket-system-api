import { Rocket } from "../model/rocket";
import { rocketRepository } from "../repository";
import { GenericService } from "./crudService";

class RocketService implements GenericService<Rocket> {

    async get() {
        return await rocketRepository.findAll();
    }

    async getById(rocketId: string) {
        const rocket = rocketRepository.findById(rocketId);

        if (!rocket)
            throw new Error('Resource not found.');

        return rocket;
    }

    async create(data: Rocket) {
        return rocketRepository.create(data.name);
    }

    async update(id: string, data: Partial<Rocket>) {
        const rocket = await this.getById(id);

        if (rocket)
            return rocketRepository.update(rocket, data.name);
    }

    async delete(id: string) {
        const rocket = await this.getById(id);
        if (rocket)
            await rocketRepository.delete(id);
    }

}
export {
    RocketService
};