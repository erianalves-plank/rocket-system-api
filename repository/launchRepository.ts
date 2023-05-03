import AppDataSource from "../ormconfig";
import { Launch } from "../model/launch";
import { Rocket } from "../model/rocket";
import { Crew } from "../model/crew";

class LaunchRepository {

    private repository = AppDataSource.getRepository(Launch);

    async findAll() {
        const launchs = await this.repository.find({
            relations: {
                rocket: true,
                crew: true,
            },
        });
        return launchs;
    }

    async findById(launchId : string){
        const launch = await this.repository.findOneBy({id: launchId});
        return launch;
    }

    async create({ id, launchCode, date, success, rocket, crew }: Launch){
        const launch = new Launch({launchCode, date, success, rocket, crew});

        await this.repository.save(launch);
        return launch;
    }

    async update(launch: Launch, launchCode : string, date: string, success: boolean, rocket: Rocket, crew: Crew){
        launch.launchCode = launchCode;
        launch.date = date;
        launch.success = success;
        launch.rocket = rocket;
        launch.crew = crew;

        await this.repository.save(launch);

        return launch;
    }

    async delete(launchId : string){
        return await this.repository.delete(launchId);
    }
}

export {
    LaunchRepository
};