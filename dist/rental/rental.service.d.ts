import { CarService } from 'src/car/car.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { RentalDto } from './dto/rental.dto';
import { Rental } from './entities/rental.entity';
export declare class RentalService {
  private rentalRepository;
  private carService;
  private userService;
  constructor(
    rentalRepository: Repository<Rental>,
    carService: CarService,
    userService: UserService,
  );
  create(rentalDto: RentalDto): Promise<Rental>;
  findRentals(query: any): Promise<Rental[]>;
  findOne(id: string, rental: RentalDto): Promise<Rental[]>;
  findOneV2(id: string): Promise<Rental>;
  sortByReturnDate({
    order,
    limit,
    ...query
  }?: {
    order?: number;
    limit?: number;
  }): Promise<Rental[]>;
  findRentalsOneUser(id: string): Promise<Rental[]>;
  findRentalsOneCar(id: string): Promise<Rental[]>;
  update(id: string, rentalDto: RentalDto): Promise<Rental>;
  remove(rentalId: string): Promise<Rental>;
}
