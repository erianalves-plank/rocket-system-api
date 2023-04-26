import express from 'express';
import { CrewController } from '../controllers/crewController';

const crewRouter = express.Router();

crewRouter.route('/')
    .get(new CrewController().handleGetCrew)
    .post(new CrewController().handle);

crewRouter.route('/:id')
    .get(new CrewController().handleGetCrewbyId)
    .delete(new CrewController().handleDeleteCrew)
    .put(new CrewController().handleUpdateCrew);

export { crewRouter };