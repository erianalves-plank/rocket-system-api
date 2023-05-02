import express from 'express';
import { RocketController }  from '../controllers/rocketController'; 

const rocketRouter = express.Router();
const rocketController = new RocketController();

rocketRouter.route('/')
    .post(rocketController.handleCreateRocket.bind(rocketController))
    .get(rocketController.handleGetRockets.bind(rocketController));

rocketRouter.route('/:id')
    .get(rocketController.handleGetRocketById.bind(rocketController))
    .put(rocketController.handleUpdateRocket.bind(rocketController))
    .delete(rocketController.handleDeleteRocket.bind(rocketController));


export { rocketRouter };