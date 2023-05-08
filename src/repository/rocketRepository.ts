import AppDataSource from "../../ormconfig";
import { Rocket } from "../model/rocket";

class RocketRepository {

    private repository = AppDataSource.getRepository(Rocket);

    async findAll() {
        const rockets = await this.repository.find();
        return rockets;
    }

    async findById(rocketId: string){
        const rocket = await this.repository.findOneBy({id: rocketId});

        return rocket;
    }

    async create( {name} : Partial<Rocket>){
        const rocket = new Rocket({name});
/*         const rocket = this.repository.create({
            id,
            name,
        }); */

        await this.repository.save(rocket);

        return rocket;
    }

    async update(rocket: Rocket, name: string){
        rocket.name = name;

        await this.repository.save(rocket);

        return rocket;
    }

    async delete(rocketId: string){
        await this.repository.delete(rocketId);
    }
}

export {
    RocketRepository
};