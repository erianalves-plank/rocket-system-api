import { launchRepository, rocketRepository, crewRepository } from "../repository";

class LaunchService {

    async getLaunchs(){
        return await launchRepository.findAll();
    }

    async getLaunchById(launchId: string) {
        const launch = launchRepository.findById(launchId);

        if (!launch)
            throw new Error('Resource not found');

        return launch;
    }

    async createLaunch(id: string, launchCode: string, date: string, success: boolean, rocketId: string, crewId: string){
        const rocket = await rocketRepository.findById(rocketId);
        const crew = await crewRepository.findById(crewId);

        return launchRepository.create({id, launchCode, date, success, rocket, crew});
    }

    async updateLaunch(id: string, launchCode: string, date: string, success: boolean, rocketId: string, crewId: string){
        const launch = await this.getLaunchById(id);
        
        const rocket = await rocketRepository.findById(rocketId);
        const crew = await crewRepository.findById(crewId);
        
        if (launch)
            return launchRepository.update(launch, launchCode, date, success, rocket, crew);
    }

    async deleteLaunch(id: string){
        const launch = await this.getLaunchById(id);
        if (launch)
            await launchRepository.delete(id);
    }

}
export {
    LaunchService
};