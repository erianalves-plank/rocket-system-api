import { CreateLaunchDTO } from "../dtos/createLaunchDTO";
import { Launch } from "../model/launch";
import { CrewRepository } from "../repository/crewRepository";
import { LaunchRepository } from "../repository/launchRepository";
import { RocketRepository } from "../repository/rocketRepository";
import { GenericService } from "./crudService";

class LaunchService implements GenericService<Launch, CreateLaunchDTO> {

    private launchRepository: LaunchRepository;
    private rocketRepository: RocketRepository;
    private crewRepository: CrewRepository;

    constructor(launchRepo: LaunchRepository, rocketRepo: RocketRepository, crewRepo: CrewRepository){
        this.launchRepository = launchRepo;
        this.rocketRepository = rocketRepo;
        this.crewRepository = crewRepo;
    }


    async get(){
        return await this.launchRepository.findAll();
    }

    async getById(launchId: string) {
        const launch = this.launchRepository.findById(launchId);

        if (!launch)
            throw new Error('Resource not found');

        return launch;
    }

    async create(data: CreateLaunchDTO){
        const rocket = await this.rocketRepository.findById(data.rocketId);
        const crew = await this.crewRepository.findById(data.crewId);

        return this.launchRepository.create(data.launchCode, data.date, data.success, rocket, crew);
    }

    async update(id: string, data: Partial<CreateLaunchDTO>){
        
        const launch = await this.getById(id);
        
        const rocket = await this.rocketRepository.findById(data.rocketId);
        const crew = await this.crewRepository.findById(data.crewId);
        
        if (launch)
            return this.launchRepository.update(launch, data.launchCode, data.date, data.success, rocket, crew);
    }

    async delete(id: string){
        const launch = await this.getById(id);
        if (launch)
            await this.launchRepository.delete(id);
    }

}
export {
    LaunchService
};