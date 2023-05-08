import { getCrudRepositoryMock } from "../__mocks/repositoryMock";
import { Rocket } from "../src/model/rocket";
import { RocketRepository } from "../src/repository/rocketRepository";
import { RocketService } from "../src/service/rocketService";


describe("RocketService", () => {
    let rocketService: RocketService;
    const mockRepository: RocketRepository = getCrudRepositoryMock();
    beforeEach(() => {
        rocketService = new RocketService(mockRepository);
    });

    const mockRocket: Rocket = {
        id: '1',
        name: 'Apollo'
    };
    describe('get', () => {

        it('should return an array of rockets', async () => {
            mockRepository.findAll = jest.fn().mockResolvedValue([mockRocket]);

            const result = await rocketService.get();

            expect(mockRepository.findAll).toHaveBeenCalled();
            expect(result).toEqual([mockRocket]);
        })

        it('should return an specific rocket given an ID', async () => {
            mockRepository.findById = jest.fn().mockImplementation((id: string) => {
                if (id === mockRocket.id) {
                    return mockRocket;
                }
                return undefined;
            })

            const result = await rocketService.getById(mockRocket.id);

            expect(mockRepository.findAll).toHaveBeenCalled();
            expect(result).toEqual(mockRocket);
        })

        it('should throw an error if crewman is not found', async () => {
            mockRepository.findById = jest.fn().mockResolvedValue([]);
            const invalidId = 'invalid_id';

            try {
                await rocketService.getById(invalidId);
            } catch (error) {
                expect(error).toEqual(new Error('Resource not found.'));
            }
        });
    })
    describe('create', () => {
        it('should create a new rocket', async () => {
            mockRepository.create = jest.fn().mockImplementation((data: Rocket) => {
                return { ...data, id: '2' }
            });

            const data: Rocket = {
                name: 'Anastasia',
                id: '2',
            }
            const result = await rocketService.create(data);

            expect(mockRepository.create).toHaveBeenCalled();
            expect(result).toEqual({ ...data, id: '2' });

        })
    })
    describe('update', () => {
        it('should update an existing rocket', async () => {
            const data: Rocket = {
                name: 'Anastasia',
                id: '1',
            }
            mockRepository.findById = jest.fn().mockResolvedValue(data);
            mockRepository.update = jest.fn().mockImplementation((data: Rocket, name: string) => {
                return { ...data, name }
            });


            const newRocketName = 'Kraskov';
            const result = await rocketService.update(data.id, { name: newRocketName });

            expect(mockRepository.update).toHaveBeenCalledWith(data, newRocketName);
            expect(result).toEqual({ ...data, name: newRocketName });
        })

        it('should throw an error if rocket is not found', async () => {
            const invalidId = 'invalid_id';
            mockRepository.findById = jest.fn().mockResolvedValue(undefined);
            await expect(rocketService.getById(invalidId)).rejects.toThrow('Resource not found.');
        });

    })
})
