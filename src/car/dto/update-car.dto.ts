import { PartialType } from '@nestjs/mapped-types';
import { CarDto } from './car.dto';

export class UpdateCarDto extends PartialType(CarDto) {}
