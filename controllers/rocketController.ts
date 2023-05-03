import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { RocketService } from '../service/rocketService';

class RocketController {
    public service : RocketService;

    constructor(){
        this.service = new RocketService();
    }

    async handleGetRockets(request: Request, response: Response){
        try {
            const result = await this.service.getRockets();
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }

    async handleGetRocketById(request: Request, response: Response){
        try {
            const id = request.params.id;
            const result = await this.service.getRocketById(id);
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }

    async handleCreateRocket(request: Request, response: Response){
        try {
            const id = uuidv4();
            const name = request.body.name;
            const result = await this.service.createRocket(id, name) ;
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }

    async handleUpdateRocket(request: Request, response: Response){
        try {
            const id = request.params.id;
            const name = request.body.name;
            const result = await this.service.updateRocket(id, name);
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }
    async handleDeleteRocket(request: Request, response: Response){
        try {
            const id = request.params.id;
            await this.service.deleteRocket(id);
            return response.status(204).end();
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }
}

export { RocketController };
