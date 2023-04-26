import { Request, Response } from 'express';
import { CrewmanService } from '../service/crewmanService';

class CrewmanController {
    async handle(request: Request, response: Response){
        const name = request.body.name;
        const patent = request.body.patent;

        const service = new CrewmanService();
        const result = await service.execute({name, patent});

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }

    async handleGetCrewman(request: Request, response: Response){
        const service = new CrewmanService();
        const crewmen = await service.getAllCrewmen();

        return response.json(crewmen);
    }

    async handleDeleteCrewman(request: Request, response: Response){
        const { id } = request.params;

        const service = new CrewmanService();
        
        const result = await service.delete(id);

        if (result instanceof Error)
            return response.status(400).json(result.message);
    

        return response.status(204).end();
    }

    async handleUpdateCrewman(request: Request, response: Response){
        const { id } = request.params;
        const { name, patent } = request.body;
        const service = new CrewmanService();
        
        const result = await service.update({ name, patent });

        if (result instanceof Error)
            return response.status(400).json(result.message);
    

        return response.json(result);
    }
}


export { CrewmanController };
