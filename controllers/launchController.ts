import { Request, Response } from 'express';
import { LaunchService } from '../service/launchService';

class LaunchController {
    async handle(request: Request, response: Response){
        const launchCode = request.body.launchCode;
        const date = request.body.date;
        const success = request.body.success;
        const rocketId = request.body.rocketId;
        const crewId = request.body.crewId;


        const service = new LaunchService();
        const result = await service.execute({launchCode, date, success, rocketId, crewId});

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }

    async handleGetLaunch(request: Request, response: Response){
        const service = new LaunchService();
        const launch = await service.getAllLaunch();

        return response.json(launch);
    }

    async handleGetLaunchById(request: Request, response: Response){
        const { id } = request.params;

        const service = new LaunchService();
        const launch = await service.getLaunchById(id);

        return response.json(launch);
    }

    async handleDeleteLaunch(request: Request, response: Response){
        const { id } = request.params;

        const service = new LaunchService();
        
        const result = await service.delete(id);

        if (result instanceof Error)
            return response.status(400).json(result.message);
    

        return response.status(204).end();
    }

    async handleUpdateLaunch(request: Request, response: Response){
        const id = parseInt(request.params.id);
        const launchCode = request.body.launchCode;
        const date = request.body.date;
        const success = request.body.success;
        const rocketId = request.body.rocketId;
        const crewId = request.body.crewId;
        const service = new LaunchService();
        
        const result = await service.update({ id, launchCode, date, success, rocketId, crewId });

        if (result instanceof Error)
            return response.status(400).json(result.message);
    

        return response.json(result);
    }
 
}
export {
    LaunchController
};