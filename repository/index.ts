import { RocketRepository } from "./rocketRepository";
import { CrewmanRepository } from "./crewmanRepository";
import { CrewRepository } from "./crewRepository";
import { LaunchRepository } from "./launchRepository";

const rocketRepository = new RocketRepository();
const crewmanRepository = new CrewmanRepository();
const crewRepository = new CrewRepository();
const launchRepository = new LaunchRepository();

export {
    rocketRepository,
    crewmanRepository,
    crewRepository,
    launchRepository
};