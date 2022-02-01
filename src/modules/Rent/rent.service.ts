import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../db/database.service';
import { CreateRentDto } from './dto/create-rent.dto';

@Injectable()
export class RentService {
  constructor(private readonly databaseService: DatabaseService) {}

  async initEntity(): Promise<void> {
    return await this.databaseService.initEntity();
  }

  async create(createRentDto: CreateRentDto) {
    return await this.databaseService.insertInto(
      createRentDto.car_id,
      createRentDto.start_date,
      createRentDto.end_date,
    );
  }

  async deleteEntity(): Promise<void> {
    return await this.databaseService.deleteEntity();
  }

  async getAvailable(car_id: number): Promise<any[]> {
    return await this.databaseService.getAvailable(car_id);
  }

  async avgWorkload(): Promise<any> {
    const workload = await this.databaseService.workload_query();
    const res = new Map();
    workload.forEach((_elem) => {
      if (!res.has(_elem['car_id'])) {
        res.set(_elem['car_id'], 0);
      }

      const end_date =
        new Date() < _elem['end_date'] ? new Date() : _elem['end_date'];

      const priorDate = new Date();
      priorDate.setDate(priorDate.getDate() - 30);

      const start_date =
        priorDate > _elem['start_date'] ? priorDate : _elem['start_date'];

      res.set(
        _elem['car_id'],
        res.get(_elem['car_id']) +
          (end_date - start_date) / (1000 * 3600 * 24 * 30),
      );
    });
    return Object.fromEntries(res);
  }

  async avgAllWorkload(): Promise<number> {
    const avg: object = await this.databaseService.workload_query();
    return (
      Object.values(avg).reduce((prev, cur) => {
        return prev + cur;
      }) / Object.keys(avg).length
    );
  }

  async calculateCost(
    start: string,
    end: string,
    car_id: string,
  ): Promise<number> {
    if (!start || !end || !car_id) throw new Error(`Not all data entered `);

    const car = car_id as unknown as number;
    const isAvailable = await this.getAvailable(car);
    if (!isAvailable.length) throw new Error(`No cars available`);

    const start_date = new Date(start);
    const end_date = new Date(end);
    if (
      start_date.getDay() < 1 ||
      start_date.getDay() > 5 ||
      end_date.getDay() < 1 ||
      end_date.getDay() > 5
    ) {
      throw new Error(`You can rent a car only on weekdays`);
    }

    start_date.setHours(12, 0, 0);
    end_date.setHours(12, 0, 0);
    let days = (end_date.valueOf() - start_date.valueOf()) / 8.64e7;
    let cost = 0;

    if (days > 29 || days <= 0) {
      throw new Error(`Rent can only be from 1 to 29 days`);
    }

    if (days > 17) {
      cost += (days - 17) * (1000 - 1000 * 0.15);
      days -= days - 17;
    }
    if (days > 9) {
      cost += (days - 9) * (1000 - 1000 * 0.1);
      days -= days - 9;
    }
    if (days > 4) {
      cost += (days - 4) * (1000 - 1000 * 0.05);
      days -= days - 4;
    }
    if (days > 4) {
      cost += (days - 4) * (1000 - 1000 * 0.05);
      days -= days - 4;
    }

    return cost + days * 1000;
  }
}
