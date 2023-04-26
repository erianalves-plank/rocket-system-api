import { Request, Response } from 'express';
import { RocketService } from '../service/rocketService';

class RocketController {
    async handle(request: Request, response: Response){
        const name = request.body.name;

        const service = new RocketService();
        const result = await service.execute({name});

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }

    async handleGetRockets(request: Request, response: Response){
        const service = new RocketService();
        const rockets = await service.getAllRockets();

        return response.json(rockets);
    }

    async handleDeleteRocket(request: Request, response: Response){
        const { id } = request.params;

        const service = new RocketService();
        
        const result = await service.deleteRocket(id);

        if (result instanceof Error)
            return response.status(400).json(result.message);
    

        return response.status(204).end();
    }

    async handleUpdateRocket(request: Request, response: Response){
        const { id } = request.params;
        const { name } = request.body;
        const service = new RocketService();
        
        const result = await service.updateRocket({ name });

        if (result instanceof Error)
            return response.status(400).json(result.message);
    

        return response.json(result);
    }
}


export { RocketController };
