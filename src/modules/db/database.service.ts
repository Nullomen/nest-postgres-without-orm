import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class DatabaseService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async initEntity(): Promise<void> {
    try {
      return await this.knex.schema.createTable('rent', function (table) {
        table.increments('id');
        table.integer('car_id').notNullable();
        table.date('start_date').notNullable();
        table.date('end_date').notNullable();
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async insertInto(car_id: number, start_date: Date, end_date: Date) {
    try {
      return await this.knex.table('rent').insert({
        car_id: car_id,
        start_date: start_date,
        end_date: end_date,
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteEntity(): Promise<void> {
    try {
      return await this.knex.schema.dropTable('rent');
    } catch (e) {
      throw new Error(e);
    }
  }

  async workload_query(): Promise<any[]> {
    try {
      return await this.knex
        .select()
        .from('rent')
        .whereRaw(`(NOW() - INTERVAL '30 DAY') < END_DATE`);
    } catch (e) {
      throw new Error(e);
    }
  }

  async getAvailable(car_id: number): Promise<any[]> {
    try {
      const date = new Date(new Date().toLocaleDateString());
      date.setDate(date.getDate() - 3);
      return await this.knex
        .select('car_id', 'end_date')
        .from(
          this.knex
            .select('car_id', 'end_date')
            .from('rent')
            .where('car_id', car_id)
            .orderBy('end_date', 'desc')
            .limit(1)
            .as('latest_date'),
        )
        .whereRaw('??::date < ?', [
          'end_date',
          new Date(date.valueOf()).toISOString(),
        ]);
    } catch (e) {
      throw new Error(e);
    }
  }
}
