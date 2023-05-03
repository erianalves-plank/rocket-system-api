import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { LaunchService } from '../service/launchService';


class LaunchController {
    private service : LaunchService;

    constructor(){
        this.service = new LaunchService();
    }

    async handleGetLaunchs(request: Request, response: Response){
        try {
            const result = await this.service.getLaunchs();
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }

    async handleGetLaunchById(request: Request, response: Response){
        try {
            const id = request.params.id;
            const result = await this.service.getLaunchById(id);
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }

    async handleCreateLaunch(request: Request, response: Response){
        try {
            const id = uuidv4();
            const { launchCode, date, success, rocketId, crewId } = request.body;
            const result = await this.service.createLaunch(id, launchCode, date, success, rocketId, crewId) ;
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }

    async handleUpdateLaunch(request: Request, response: Response){
        try {
            const id = request.params.id;
            const { launchCode, date, success, rocketId, crewId } = request.body;
            const result = await this.service.updateLaunch(id, launchCode, date, success, rocketId, crewId);
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }

    async handleDeleteLaunch(request: Request, response: Response){
        try {
            const id = request.params.id;
            await this.service.deleteLaunch(id);
            return response.status(204).end();
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }
}


export { LaunchController };
