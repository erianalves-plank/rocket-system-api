export interface GenericRepository<T> {
    findAll(): Promise<T[]>,
    findById(id: string): Promise<T>,
    create(data: T): Promise<T>,
    update(obj: T, data: Partial<T>): Promise<T>,
    delete(id: string): void
}