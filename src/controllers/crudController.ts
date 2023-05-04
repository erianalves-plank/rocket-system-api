import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';

import { GenericService } from "../service/crudService";

class CrudController<T, U> {
    private service: GenericService<T, U>;

    constructor(service: GenericService<T, U>) {
        this.service = service;
    }

     handleGet = async (request: Request, response: Response) => {
        try {
            const result = await this.service.get();
            return response.json(result);
        }
        catch (err) {
            return response.status(500).json(err.message);
        }
    }

    handleGetById = async(request: Request, response: Response) => {
        try {
            const id = request.params.id;
            const result = await this.service.getById(id);
            return response.json(result);
        }
        catch (err) {
            return response.status(500).json(err.message);
        }
    }

    handleCreate = async(request: Request, response: Response) => {
        try {
            const id = uuidv4();
            const data = request.body;
            const result = await this.service.create(data) ;
            return response.json(result);
        }
        catch (err) {
            return response.status(500).json(err.message);
        }
    }

    handleUpdate = async(request: Request, response: Response) => {
        try {
            const id = request.params.id;
            const data = request.body;
            const result = await this.service.update(id, data);
            return response.json(result);
        }
        catch (err) {
            return response.status(500).json(err.message);
        }
    }
    handleDelete = async(request: Request, response: Response) => {
        try {
            const id = request.params.id;
            this.service.delete(id);
            return response.status(204).end();
        }
        catch (err) {
            return response.status(500).json(err.message);
        }
    }

}

export {
    CrudController
};