import { Crew } from "../model/crew";
import AppDataSource from "../ormconfig";
import { Crewman } from "../model/crewman";

const crewRepository = AppDataSource.getRepository(Crew);
const crewmanRepository = AppDataSource.getRepository(Crewman);

type CrewRequest = {
    id?: number;
    name: string;
    crewmen: number[];

}

class CrewService {
    async execute({ name, crewmen }: CrewRequest): Promise<Crew | Error> {
        let crewmenObj: Crewman[] = [];
        for (const crewmanId of crewmen){
            let crewman = (await crewmanRepository.findOneBy({id: crewmanId}));
            crewmenObj.push(crewman);
        }
        const crew = new Crew();
        crew.crewmen = crewmenObj;
        crew.name = name;

        await crewRepository.save(crew);

        return crew;
    }

    async getAllCrew() {
        const crew = await crewRepository.find({
            relations: {
                crewmen: true,
            },
        });
        return crew;
    }

    async getCrewById(crewId: string){
        const crew = await crewRepository.findOneBy({id: parseInt(crewId)});
        return crew;
    }

    async delete(crewId: string){
        if (!(await crewRepository.findOneBy({id: parseInt(crewId)})))
            return new Error("Crew not found");

        await crewRepository.delete(crewId);
    }

    async update({id, name, crewmen} : CrewRequest){
        const crew = await crewRepository.findOneBy({id: id});
        if (!crew)
            return new Error("Crew not found");

        let crewmenObj: Crewman[] = [];
        for (const crewmanId of crewmen){
            let crewman = (await crewmanRepository.findOneBy({id: crewmanId}));
            crewmenObj.push(crewman);
        }
        crew.name = name;
        crew.crewmen = crewmenObj;

        await crewRepository.save(crew);

        return crew;
    }

}
export {
    CrewService
};