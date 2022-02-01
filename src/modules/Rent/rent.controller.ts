import {
  BadRequestException,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { RentService } from './rent.service';

@Controller('rent')
export class RentController {
  constructor(private readonly rentService: RentService) {}

  @Get('getInit')
  @ApiResponse({
    status: 201,
    description: 'The entity has been successfully created.',
  })
  @ApiNotFoundResponse({ status: 404, description: 'Not Found' })
  async getInit(): Promise<any> {
    try {
      return await this.rentService.initEntity();
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('getDelete')
  @ApiResponse({
    status: 201,
    description: 'The entity has been successfully deleted.',
  })
  @ApiNotFoundResponse({ status: 404, description: 'Not Found' })
  async getDelete(): Promise<any> {
    try {
      return await this.rentService.deleteEntity();
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('getAvailable')
  @ApiResponse({
    status: 201,
    description: 'The query has been successfully sended.',
  })
  @ApiNotFoundResponse({ status: 404, description: 'Not Found' })
  async getAvailable(): Promise<any> {
    try {
      return await this.rentService.getAvailable(2);
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('getAvgWorkload')
  @ApiResponse({
    status: 201,
    description: 'The query has been successfully sended.',
  })
  @ApiNotFoundResponse({ status: 404, description: 'Not Found' })
  async getAvgWorkload(): Promise<any> {
    try {
      return await this.rentService.avgWorkload();
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('getAvgAllWorkload')
  @ApiResponse({
    status: 201,
    description: 'The query has been successfully sended.',
  })
  @ApiNotFoundResponse({ status: 404, description: 'Not Found' })
  async getAvgAllWorkload(): Promise<any> {
    try {
      return await this.rentService.avgAllWorkload();
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('getCost') // example /rent/getCost?start_date=2021-12-12&end_date=2021-12-28
  @ApiResponse({
    status: 201,
    description: 'The query has been successfully sended.',
  })
  @ApiNotFoundResponse({ status: 404, description: 'Not Found' })
  async getCost(@Query() query): Promise<any> {
    if (!query.start_date || !query.end_date || !query.car_id)
      throw new BadRequestException();

    try {
      return await this.rentService.calculateCost(
        query.start_date,
        query.end_date,
        query.car_id,
      );
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }
}
