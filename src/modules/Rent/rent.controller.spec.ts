import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseService } from '../db/database.service';
import { RentController } from './rent.controller';
import { RentService } from './rent.service';

describe('Module: rent.controller . Class: RentController', () => {
  let rentController: RentController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [RentController],
      providers: [
        RentService,
        { provide: DatabaseService, useValue: { executeQuery: jest.fn() } },
      ],
    }).compile();

    rentController = moduleRef.get<RentController>(RentController);
  });

  describe('f: getInit', () => {
    it('should be defined', async () => {
      const mock = jest
        .spyOn(rentController, 'getInit')
        .mockImplementation(() => Promise.resolve());
      expect(mock).toBeDefined();
    });
  });

  describe('f: getDelete', () => {
    it('should be defined', async () => {
      const mock = jest
        .spyOn(rentController, 'getDelete')
        .mockImplementation(() => Promise.resolve());
      expect(mock).toBeDefined();
    });
  });

  describe('f: getAvailable', () => {
    it('should be defined', async () => {
      const mock = jest
        .spyOn(rentController, 'getAvailable')
        .mockImplementation(() => Promise.resolve());
      expect(mock).toBeDefined();
    });
  });

  describe('f: getAvgWorkload', () => {
    it('should be defined', async () => {
      const mock = jest
        .spyOn(rentController, 'getAvgWorkload')
        .mockImplementation(() => Promise.resolve());
      expect(mock).toBeDefined();
    });
  });

  describe('f: getAvgAllWorkload', () => {
    it('should be defined', async () => {
      const mock = jest
        .spyOn(rentController, 'getAvgAllWorkload')
        .mockImplementation(() => Promise.resolve());
      expect(mock).toBeDefined();
    });
  });

  describe('f: getCost', () => {
    it('should be defined', async () => {
      const mock = jest
        .spyOn(rentController, 'getCost')
        .mockImplementation(() => Promise.resolve());
      expect(mock).toBeDefined();
    });
  });
});
