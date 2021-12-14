import { Repository } from 'typeorm';
import { CarDto } from './dto/car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { UserService } from 'src/user/user.service';
export declare class CarService {
  private carRepository;
  private userService;
  constructor(carRepository: Repository<Car>, userService: UserService);
  findCars(query: any): Promise<Car[]>;
  sortByPrice({
    order,
    limit,
    ...query
  }?: {
    order?: number;
    limit?: number;
  }): Promise<Car[]>;
  sortByYear({
    order,
    limit,
    ...query
  }?: {
    order?: number;
    limit?: number;
  }): Promise<Car[]>;
  findOne(id: string): Promise<Car>;
  create(newCar: CarDto): Promise<Car>;
  update(carId: string, newCar: UpdateCarDto): Promise<Car>;
  delete(carId: string): Promise<Car>;
}
