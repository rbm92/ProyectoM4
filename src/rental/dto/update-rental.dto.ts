import { PartialType } from '@nestjs/mapped-types';
import { RentalDto } from './rental.dto';

export class UpdateRentalDto extends PartialType(RentalDto) {}
