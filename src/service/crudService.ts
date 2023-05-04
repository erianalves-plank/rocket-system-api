export interface GenericService<T, CreateDTO = T> {
    get(): Promise<T[]>,
    getById(id: string): Promise<T>,
    create(data: CreateDTO): Promise<T>,
    update(id: string, data: Partial<CreateDTO>): Promise<T>,
    delete(id: string): void
}