import { CarService } from './car.service';
import { CarDto } from './dto/car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { Request } from 'express';
export declare class CarController {
  private readonly carService;
  constructor(carService: CarService);
  findCars(req: Request): Promise<Car[]>;
  sortByPrice(req: Request): Promise<Car[]>;
  sortByYear(req: Request): Promise<Car[]>;
  findOne(id: string): Promise<Car>;
  create(createCarDto: CarDto): Promise<Car>;
  update(id: string, updateCarDto: UpdateCarDto): Promise<Car>;
  delete(id: string): Promise<Car>;
}
