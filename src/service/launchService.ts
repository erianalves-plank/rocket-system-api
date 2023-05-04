import { CreateLaunchDTO } from "../dtos/createLaunchDTO";
import { Launch } from "../model/launch";
import { launchRepository, rocketRepository, crewRepository } from "../repository";
import { GenericService } from "./crudService";

class LaunchService implements GenericService<Launch, CreateLaunchDTO> {

    async get(){
        return await launchRepository.findAll();
    }

    async getById(launchId: string) {
        const launch = launchRepository.findById(launchId);

        if (!launch)
            throw new Error('Resource not found');

        return launch;
    }

    async create(data: CreateLaunchDTO){
        const rocket = await rocketRepository.findById(data.rocketId);
        const crew = await crewRepository.findById(data.crewId);

        return launchRepository.create(data.launchCode, data.date, data.success, rocket, crew);
    }

    async update(id: string, data: Partial<CreateLaunchDTO>){
        
        const launch = await this.getById(id);
        
        const rocket = await rocketRepository.findById(data.rocketId);
        const crew = await crewRepository.findById(data.crewId);
        
        if (launch)
            return launchRepository.update(launch, data.launchCode, data.date, data.success, rocket, crew);
    }

    async delete(id: string){
        const launch = await this.getById(id);
        if (launch)
            await launchRepository.delete(id);
    }

}
export {
    LaunchService
};