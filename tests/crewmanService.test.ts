import { getCrudRepositoryMock } from "../__mocks/repositoryMock";
import { Crewman } from "../src/model/crewman";
import { CrewmanRepository } from "../src/repository/crewmanRepository";
import { CrewmanService } from "../src/service/crewmanService";


describe("CrewmanService", () => {
  let crewmanService: CrewmanService;
  const mockRepository: CrewmanRepository = getCrudRepositoryMock();
  beforeEach(() => {
    crewmanService = new CrewmanService(mockRepository);
  });

  const mockCrewman: Crewman = {
    id: '1',
    name: 'Kris',
    patent: 'Captain'
  };
  describe('get', () => {

    it('should return an array of crewmen', async () => {
      mockRepository.findAll = jest.fn().mockResolvedValue([mockCrewman]);

      const result = await crewmanService.get();

      expect(mockRepository.findAll).toHaveBeenCalled();
      expect(result).toEqual([mockCrewman]);
    })

    it('should return an specific crewman given an ID', async () => {
      mockRepository.findById = jest.fn().mockImplementation((id: string) => {
        return mockCrewman;
      })

      const result = await crewmanService.getById(mockCrewman.id);

      expect(mockRepository.findAll).toHaveBeenCalled();
      expect(result).toEqual(mockCrewman);
    })

    it('should throw an error if crewman is not found', async () => {
      mockRepository.findById = jest.fn().mockResolvedValue(undefined);
      const invalidId = 'invalid_id';
      await expect(crewmanService.getById(invalidId)).rejects.toThrow('Resource not found.');

    });
  })
  describe('create', () => {
    it('should create a new crewman', async () => {
      mockRepository.create = jest.fn().mockImplementation((data: Crewman) => {
        return { ...data, id: '2' }
      });

      const data: Crewman = {
        name: 'Creed Braton',
        id: '2',
        patent: 'Pretty Normal Guy',
      }
      const result = await crewmanService.create(data);

      expect(mockRepository.create).toHaveBeenCalled();
      expect(result).toEqual({ ...data, id: '2' });

    })
  })
  describe('update', () => {
    it('should update an existing crewman', async () => {
      const data: Crewman = {
        name: 'Creton Breed',
        id: '1',
        patent: 'A Weird Guy',
      }
      mockRepository.findById = jest.fn().mockResolvedValue(data);
      mockRepository.update = jest.fn().mockImplementation((data: Crewman, name: string, patent: string) => {
        return { ...data, name, patent }
      });


      const newCrewmanName = 'Jotaro';
      const newCrewmanPatent = 'Lab Helper';

      const result = await crewmanService.update(data.id, { name: newCrewmanName, patent: newCrewmanPatent });

      expect(mockRepository.update).toHaveBeenCalledWith(data, newCrewmanName, newCrewmanPatent);
      expect(result).toEqual({ ...data, name: newCrewmanName, patent: newCrewmanPatent });
    })

    it('should throw an error if rocket is not found', async () => {
      const invalidId = 'invalid_id';
      mockRepository.findById = jest.fn().mockResolvedValue(undefined);
      await expect(crewmanService.getById(invalidId)).rejects.toThrow('Resource not found.');
    });

  })
})
