import { Launch } from "../model/launch";
import { Rocket } from "../model/rocket";
import { Crew } from "../model/crew";
import AppDataSource from "../ormconfig";

const launchRepository = AppDataSource.getRepository(Launch);
const crewRepository = AppDataSource.getRepository(Crew);
const rocketRepository = AppDataSource.getRepository(Rocket);

type LaunchRequest = {
    id?: number;
    launchCode: string;
    date: string;
    success?: boolean;
    rocketId: number;
    crewId?: number;
}

class LaunchService {
    async execute({ launchCode, date, success, rocketId, crewId}: LaunchRequest): Promise<Launch | Error> {

        const rocket = await rocketRepository.findOneBy({ id: rocketId });
        const crew = await crewRepository.findOneBy({ id: crewId });

        const launch = launchRepository.create({
            launchCode,
            date,
            success,
            rocket,
            crew 
        }); 

        await launchRepository.save(launch);

        return launch;
    }

    async getAllLaunch() {
        const launch = await launchRepository.find({
            relations: {
                rocket: true,
                crew: true,
            },
        });
        return launch;
    }

    async getLaunchById(launchId: string){
        const launch = await launchRepository.findOneBy({id: parseInt(launchId)});
        return launch;
    }

    async delete(launchId: string){
        if (!(await launchRepository.findOneBy({id: parseInt(launchId)})))
            return new Error("launch not found");

        await launchRepository.delete(launchId);
    }

    async update({id, launchCode, date, success, rocketId, crewId} : LaunchRequest){
        const launch = await launchRepository.findOneBy({id: id});
        if (!launch)
            return new Error("launch not found");

        const rocket = await rocketRepository.findOneBy({ id: rocketId });
        const crew = await crewRepository.findOneBy({ id: crewId });

        launch.launchCode = launchCode;
        launch.date = date;
        launch.success = success;
        launch.rocket = rocket;
        launch.crew = crew;

        await launchRepository.save(launch);

        return launch;
    }
}
export {
    LaunchService
};
