 import express from 'express';
import { CrewmanController } from '../controllers/crewmanController';

const crewmanRouter = express.Router();
const crewmanController = new CrewmanController();

crewmanRouter.route('/')
    .get(crewmanController.handleGetCrewmen.bind(crewmanController))
    .post(crewmanController.handleCreateCrewman.bind(crewmanController));

crewmanRouter.route('/:id')
    .put(crewmanController.handleUpdateCrewman.bind(crewmanController))
    .delete(crewmanController.handleDeleteCrewman.bind(crewmanController))
    .get(crewmanController.handleGetCrewmen.bind(crewmanController));

export {
    crewmanRouter
};