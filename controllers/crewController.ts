import { Request, Response } from 'express';
import { CrewService } from '../service/crewService';

class CrewController {
    async handle(request: Request, response: Response){
        const name = request.body.name;
        const crewmen = request.body.crewmenId;

        const service = new CrewService();
        const result = await service.execute({name, crewmen});

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }

    async handleGetCrew(request: Request, response: Response){
        const service = new CrewService();
        const crewmen = await service.getAllCrew();

        return response.json(crewmen);
    }

    async handleGetCrewbyId(request: Request, response: Response){
        const { id } = request.params;

        const service = new CrewService();
        const crew = await service.getCrewById(id);

        return response.json(crew);
    }

    async handleDeleteCrew(request: Request, response: Response){
        const { id } = request.params;

        const service = new CrewService();
        
        const result = await service.delete(id);

        if (result instanceof Error)
            return response.status(400).json(result.message);
    

        return response.status(204).end();
    }

    async handleUpdateCrew(request: Request, response: Response){
        const id = parseInt(request.params.id);
        const name = request.body.name;
        const crewmen = request.body.crewmenId;
        const service = new CrewService();
        
        const result = await service.update({ id, name, crewmen });

        if (result instanceof Error)
            return response.status(400).json(result.message);
    

        return response.json(result);
    }
 
}


export { CrewController };