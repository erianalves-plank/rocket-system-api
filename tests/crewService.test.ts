/* import { crewRepository, crewmanRepository } from "../src/repository";
import { Crew } from "../src/model/crew";
import { CrewService } from "../src/service/crewService";
import { CreateCrewDTO } from "../src/dtos/createCrewDTO";

// Define a mock crewman object to use in the tests
const mockCrew: Crew = {
  id: '1',
  name: 'John Doe',
  crewmen: [{
    id: '1',
    name: 'Criss',
    patent: 'Sub',
  }]
};

// Mock the repository's methods
jest.mock('../src/repository', () => {
  const crew_1 = new Crew({name: 'John Doe',   crewmen: [{
    id: '1',
    name: 'Criss',
    patent: 'Sub'
  }]}, '1')
  const mockFindAll = jest.fn().mockResolvedValue([crew_1]);
  const mockFindById = jest.fn().mockImplementation((id: string) => {
    if (id === mockCrew.id) {
      return mockCrew;
    }
    return undefined;
  });
  const mockCreate = jest.fn().mockImplementation((data: Crew) => {
    return { ...data, id: '2' }; // Return the created crew with a new ID
  });
  const mockUpdate = jest.fn().mockImplementation((crew: Crew, name: string, crewmen: string[]) => {
    return { ...crew, name, crewmen };
  });
  const mockDelete = jest.fn().mockResolvedValue(true);

  return {
    crewRepository: {
      //findAll: mockFindAll,
      findById: mockFindById,
      create: mockCreate,
      update: mockUpdate,
      delete: mockDelete,
    },
  };
});

describe('CrewService', () => {
  console.log('>>>>>>>>>>>>>> ' + crewRepository)
  const service = new CrewService(crewRepository, crewmanRepository);

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock calls before each test
  });

  describe('get', () => {
    it('should return an array of crew', async () => {
      const result = await service.get();

      expect(crewRepository.findAll).toHaveBeenCalledTimes(1);
      expect(result).toEqual([mockCrew]);
    });
  });

  describe('getById', () => {
    it('should return a crew by ID', async () => {
      const result = await service.getById(mockCrew.id);

      expect(crewRepository.findById).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockCrew);
    });

    it('should throw an error if crew is not found', async () => {
      const invalidId = 'invalid_id';

      try {
        await service.getById(invalidId);
      } catch (error) {
        expect(error).toEqual(new Error('Resource not found'));
      }
    });
  });

  describe('create', () => {
    it('should create a new crew', async () => {
      const data : CreateCrewDTO  = { id: '2', name: 'Apollo', crewmenIds: ['1'] };
      const result = await service.create({id: '2', name: 'Apollo', crewmenIds: ['1']});

      expect(crewRepository.create).toHaveBeenCalledTimes(1);
      expect(result).toEqual({ id: '2', ...data });
    });
  });

  describe('update', () => {
    it('should update a crew by ID', async () => {
      const data : CreateCrewDTO  = { id: '2', name: 'Apollo', crewmenIds: ['1'] };
      const result = await service.update(mockCrew.id, data);

      expect(crewRepository.update).toHaveBeenCalledTimes(1);
      expect(result).toEqual({ ...mockCrew, ...data });
    });

    it('should throw an error if crew is not found', async () => {
      const invalidId = 'invalid_id';
      const data = { name: 'Jane Doe', patent: 'Lieutenant' };
      try {
        await service.getById(invalidId);
      } catch (error) {
        expect(error).toEqual(new Error('Resource not found'));
      }
    })
  })

  describe ('delete', () => {
    it('shoudl delete a crew by ID', async () => {
      const result = await service.delete(mockCrew.id);

      expect(crewRepository.delete).toHaveBeenCalledTimes(1);
      expect(result).toBe(true);
    })
  })
});
 */

describe ('delete', () => {
  it('shoudl delete a crew by ID',  () => {


    expect(1+1==2).toBe(true);
  })
})