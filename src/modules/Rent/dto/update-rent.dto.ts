import { PartialType } from '@nestjs/mapped-types';
import { CreateRentDto } from './create-rent.dto';

export class UpdateRentDto extends PartialType(CreateRentDto) {}
