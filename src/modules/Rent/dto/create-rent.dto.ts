import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';

export class CreateRentDto {
  @IsNotEmpty()
  @IsNumber()
  car_id: number;

  @IsNotEmpty()
  @IsDate()
  start_date: Date;

  @IsNotEmpty()
  @IsDate()
  end_date: Date;
}
