import express from "express";
import { CrudController } from "../controllers/crudController";
import { rocketService, crewmanService, crewService, launchService } from "../service";
import { GenericService } from "../service/crudService";

const setUpRoutes = <T, U>(path: string, service: GenericService<T, U>) => {
    const entityController = new CrudController(service);

    const entityRouter = express.Router();

    entityRouter.route(`/${path}`)
        .get(entityController.handleGet)
        .post(entityController.handleCreate);

    entityRouter.route(`/${path}/:id`)
        .get(entityController.handleGetById)
        .put(entityController.handleUpdate)
        .delete(entityController.handleDelete);

    return entityRouter;
}

const router = express.Router();

router.use(setUpRoutes('rocket', rocketService));
router.use(setUpRoutes('crewman', crewmanService));
router.use(setUpRoutes('crew', crewService));
router.use(setUpRoutes('launch', launchService));

export {
    router
};