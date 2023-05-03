import express from 'express';
import { CrewController } from '../controllers/crewController';

const crewRouter = express.Router();
const crewController = new CrewController();
crewRouter.route('/')
    .get(crewController.handleGetCrews.bind(crewController))
    .post(crewController.handleCreateCrew.bind(crewController));

crewRouter.route('/:id')
    .get(crewController.handleGetCrewById.bind(crewController))
    .delete(crewController.handleDeleteCrew.bind(crewController))
    .put(crewController.handleUpdateCrew.bind(crewController));

export { crewRouter };