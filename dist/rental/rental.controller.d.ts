import { RentalService } from './rental.service';
import { RentalDto } from './dto/rental.dto';
import { Rental } from './entities/rental.entity';
import { Request } from 'express';
export declare class RentalController {
  private readonly rentalService;
  constructor(rentalService: RentalService);
  create(rentalDto: RentalDto): Promise<Rental>;
  findRentals(req: Request): Promise<Rental[]>;
  sortByReturnDate(req: Request): Promise<Rental[]>;
  findRentalsOneCar(id: string): Promise<Rental[]>;
  findRentalsOneUser(id: string): Promise<Rental[]>;
  update(id: string, rentalDto: RentalDto): Promise<Rental>;
  findOneV2(id: string): Promise<Rental>;
  remove(id: string): Promise<Rental>;
}
