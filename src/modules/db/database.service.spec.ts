import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseService } from './database.service';

describe('Module: database.service . Class: DatabaseService', () => {
  let databaseService: DatabaseService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: DatabaseService,
          useValue: {
            initEntity: jest.fn(),
            insertInto: jest.fn(),
            deleteEntity: jest.fn(),
            workload_query: jest.fn(),
            getAvailable: jest.fn(),
          },
        },
      ],
    }).compile();

    databaseService = moduleRef.get<DatabaseService>(DatabaseService);
  });

  describe('f: initEntity', () => {
    it('should be defined', async () => {
      const mock = jest
        .spyOn(databaseService, 'initEntity')
        .mockImplementation(() => Promise.resolve());
      expect(mock).toBeDefined();
    });
  });

  describe('f: insertInto', () => {
    it('should be defined', async () => {
      const mock = jest
        .spyOn(databaseService, 'initEntity')
        .mockImplementation();
      expect(mock).toBeDefined();
    });
  });

  describe('f: deleteEntity', () => {
    it('should be defined', async () => {
      const mock = jest
        .spyOn(databaseService, 'deleteEntity')
        .mockImplementation(() => Promise.resolve());
      expect(mock).toBeDefined();
    });
  });

  describe('f: workload_query', () => {
    it('should be defined', async () => {
      const mock = jest
        .spyOn(databaseService, 'workload_query')
        .mockImplementation(() => Promise.resolve([]));
      expect(mock).toBeDefined();
    });
  });

  describe('f: getAvailable', () => {
    it('should be defined', async () => {
      const mock = jest
        .spyOn(databaseService, 'getAvailable')
        .mockImplementation(() => Promise.resolve([]));
      expect(mock).toBeDefined();
    });
  });
});
