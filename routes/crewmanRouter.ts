import express from 'express';
import { CrewmanController } from '../controllers/crewmanController';

const crewmanRouter = express.Router();

crewmanRouter.route('/')
    .get(new CrewmanController().handleGetCrewman)
    .post(new CrewmanController().handle);


crewmanRouter.route('/:id')
    .put(new CrewmanController().handleUpdateCrewman)
    .delete(new CrewmanController().handleDeleteCrewman);

export {
    crewmanRouter
};