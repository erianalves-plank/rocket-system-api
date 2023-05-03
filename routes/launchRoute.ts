import express from 'express';
import { LaunchController } from '../controllers/launchController';

const launchRouter = express.Router();
const launchController = new LaunchController();
launchRouter.route('/')
    .get(launchController.handleGetLaunchs.bind(launchController))
    .post(launchController.handleCreateLaunch.bind(launchController));


launchRouter.route('/:id')
    .get(launchController.handleGetLaunchById.bind(launchController))
    .put(launchController.handleUpdateLaunch.bind(launchController))
    .delete(launchController.handleDeleteLaunch.bind(launchController));

export {
    launchRouter
};