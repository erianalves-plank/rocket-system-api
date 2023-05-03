import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { CrewmanRepository } from '../repository/crewmanRepository';
import { CrewmanService } from '../service/crewmanService';

class CrewmanController {
    public service : CrewmanService;
    public repo: CrewmanRepository;

    constructor(){
        this.repo = new CrewmanRepository();
        this.service = new CrewmanService(this.repo);
    }

    async handleGetCrewmen(request: Request, response: Response){
        try {
            const result = await this.service.getCrewmen();
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }

    async handleGetCrewmanById(request: Request, response: Response){
        try {
            const id = request.params.id;
            const result = await this.service.getCrewmanById(id);
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }

    async handleCreateCrewman(request: Request, response: Response){
        try {
            const id = uuidv4();
            const { name, patent } = request.body;
            const result = await this.service.createCrewman(id, name, patent) ;
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }

    async handleUpdateCrewman(request: Request, response: Response){
        try {
            const id = request.params.id;
            const { name, patent } = request.body;
            const result = await this.service.updateCrewman(id, name, patent);
            return response.json(result);
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }

    async handleDeleteCrewman(request: Request, response: Response){
        try {
            const id = request.params.id;
            await this.service.deleteCrewman(id);
            return response.status(204).end();
        }
        catch (err) {
            return response.sendStatus(500).json(err.message);
        }
    }
}


export { CrewmanController };
