import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseService } from '../db/database.service';
import { RentService } from './rent.service';
import { CreateRentDto } from './dto/create-rent.dto';

const uploadRent = new CreateRentDto();
uploadRent.car_id = 1;
uploadRent.end_date = new Date('Dec 20, 2021');
uploadRent.start_date = new Date('Dec 30, 2021');

describe('Module: rent.service . Class: RentService', () => {
  let rentService: RentService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        RentService,
        { provide: DatabaseService, useValue: { executeQuery: jest.fn() } },
      ],
    }).compile();

    rentService = moduleRef.get<RentService>(RentService);
  });

  describe('f: initEntity', () => {
    it('should have been defined', async () => {
      const mock = jest
        .spyOn(rentService, 'initEntity')
        .mockImplementation(() => Promise.resolve());
      expect(mock).toBeDefined();
    });
  });

  describe('f: create', () => {
    it('should to be defined', async () => {
      const mock = jest
        .spyOn(rentService, 'create')
        .mockImplementation(async () => []);
      expect(await rentService.create(uploadRent)).toBeDefined();
      expect(mock).toHaveBeenCalled();
    });
  });

  describe('f: deleteEntity', () => {
    it('should to be defined', async () => {
      const mock = jest
        .spyOn(rentService, 'deleteEntity')
        .mockImplementation(() => Promise.resolve());
      expect(mock).toBeDefined();
    });
  });

  describe('f: getAvailable', () => {
    it('should to be defined', async () => {
      const mock = jest
        .spyOn(rentService, 'getAvailable')
        .mockImplementation(async () => []);
      expect(await rentService.getAvailable(1)).toBeDefined();
      expect(await rentService.getAvailable(1)).toStrictEqual([]);
      expect(mock).toHaveBeenCalled();
    });
  });

  describe('f: avgWorkload', () => {
    it('should to be defined', async () => {
      const mock = jest
        .spyOn(rentService, 'avgWorkload')
        .mockImplementation(async () => []);
      expect(await rentService.avgWorkload()).toBeDefined();
      expect(mock).toHaveBeenCalled();
      expect(await rentService.avgWorkload()).toStrictEqual([]);
    });
  });

  describe('f: avgAllWorkload', () => {
    it('should to be defined', async () => {
      const mock = jest
        .spyOn(rentService, 'avgAllWorkload')
        .mockImplementation(async () => 1);
      expect(await rentService.avgAllWorkload()).toBeDefined();
      expect(await rentService.avgAllWorkload()).toBe(1);
      expect(mock).toHaveBeenCalled();
    });
  });

  describe('f: calculateCost', () => {
    it('should to be defined', async () => {
      const mock = jest
        .spyOn(rentService, 'calculateCost')
        .mockImplementation(async () => 4950);
      expect(
        await rentService.calculateCost('2021-12-30', '2022-01-04', '2'),
      ).toBeDefined();
      expect(
        await rentService.calculateCost('2021-12-30', '2022-01-04', '2'),
      ).toBe(4950);
      expect(mock).toHaveBeenCalled();
    });
  });
});
