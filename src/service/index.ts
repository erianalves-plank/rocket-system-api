import { RocketService } from "./rocketService";
import { CrewmanService } from "./crewmanService";
import { CrewService } from "./crewService";
import { LaunchService } from "./launchService";
import { rocketRepository, crewmanRepository, crewRepository, launchRepository } from "../repository";

const rocketService = new RocketService(rocketRepository) ;
const crewmanService = new CrewmanService(crewmanRepository);
const crewService = new CrewService(crewRepository, crewmanRepository);
const launchService = new LaunchService(launchRepository, rocketRepository, crewRepository);

export {
    rocketService,
    crewmanService,
    crewService,
    launchService
};