import { RocketService } from "./rocketService";
import { CrewmanService } from "./crewmanService";
import { CrewService } from "./crewService";
import { LaunchService } from "./launchService";

const rocketService = new RocketService();
const crewmanService = new CrewmanService();
const crewService = new CrewService();
const launchService = new LaunchService();

export {
    rocketService,
    crewmanService,
    crewService,
    launchService
};