import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { CrewService } from '../service/crewService';

class CrewController {
    private service : CrewService;

    constructor(){
        this.service = new CrewService();
    }

    async handleGetCrews(request: Request, response: Response){
        try {
            const result = await this.service.getCrews();
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }

    async handleGetCrewById(request: Request, response: Response){
        try {
            const id = request.params.id;
            const result = await this.service.getCrewById(id);
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }

    async handleCreateCrew(request: Request, response: Response){
        try {
            const id = uuidv4();
            const { name, crewmenIds } = request.body;
            const result = await this.service.createCrew(id, name, crewmenIds) ;
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }

    async handleUpdateCrew(request: Request, response: Response){
        try {
            const id = request.params.id;
            const { name, crewmenIds } = request.body;
            const result = await this.service.updateCrew(id, name, crewmenIds);
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }

    async handleDeleteCrew(request: Request, response: Response){
        try {
            const id = request.params.id;
            await this.service.deleteCrew(id);
            return response.status(204).end();
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }
}


export { CrewController };
