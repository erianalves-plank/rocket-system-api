import express from 'express';
import { LaunchController } from '../controllers/launchController';

const launchRouter = express.Router();

launchRouter.route('/')
    .get(new LaunchController().handleGetLaunch)
    .post(new LaunchController().handle);


launchRouter.route('/:id')
    .get(new LaunchController().handleGetLaunchById)
    .put(new LaunchController().handleUpdateLaunch)
    .delete(new LaunchController().handleDeleteLaunch);

export {
    launchRouter
};