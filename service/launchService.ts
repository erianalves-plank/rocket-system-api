import { NumericType } from "typeorm";
import { LaunchRepository } from "../repository/launchRepository"
import { RocketRepository } from "../repository/rocketRepository";
import { CrewRepository } from "../repository/crewRepository";

class LaunchService {

    private launchRepository: LaunchRepository;
    private rocketRepository: RocketRepository;
    private crewRepository: CrewRepository;

    constructor(launchRepository: LaunchRepository, rocketRepository: RocketRepository, crewRepository: CrewRepository){
        this.launchRepository = launchRepository;
        this.rocketRepository = rocketRepository;
        this.crewRepository = crewRepository;
    }

    async getLaunchs(){
        return await this.launchRepository.findAll();
    }

    async getLaunchById(launchId: string) {
        const launch = this.launchRepository.findById(launchId);

        if (!launch)
            throw new Error('Resource not found');

        return launch;
    }

    async createLaunch(id: string, launchCode: string, date: string, success: boolean, rocketId: string, crewId: string){
        const rocket = await this.rocketRepository.findById(rocketId);
        const crew = await this.crewRepository.findById(crewId);

        return this.launchRepository.create({id, launchCode, date, success, rocket, crew});
    }

    async updateLaunch(id: string, launchCode: string, date: string, success: boolean, rocketId: string, crewId: string){
        const launch = await this.getLaunchById(id);
        
        const rocket = await this.rocketRepository.findById(rocketId);
        const crew = await this.crewRepository.findById(crewId);
        
        if (launch)
            return this.launchRepository.update(launch, launchCode, date, success, rocket, crew);
    }

    async deleteLaunch(id: string){
        const launch = await this.getLaunchById(id);
        if (launch)
            await this.launchRepository.delete(id);
    }

}
export {
    LaunchService
};