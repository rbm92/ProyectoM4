import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarDto } from './dto/car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
    private userService: UserService,
  ) {}

  async findCars(query: any): Promise<Car[]> {
    return await this.carRepository.find({ where: query });
  }

  async sortByPrice({ order = 1, limit = 0, ...query } = {}): Promise<Car[]> {
    let sort;
    if (order == 1) sort = 'ASC';
    if (order == 0) sort = 'DESC';

    return await this.carRepository.find({
      where: query,
      order: { price_day: sort },
      take: limit,
    });
  }

  async sortByYear({ order = 1, limit = 0, ...query } = {}): Promise<Car[]> {
    let sort;
    if (order == 1) sort = 'ASC';
    if (order == 0) sort = 'DESC';

    return await this.carRepository.find({
      where: query,
      order: { year: sort },
      take: limit,
    });
  }

  async findOne(id: string): Promise<Car> {
    return await this.carRepository.findOne(id);
  }

  async create(newCar: CarDto ): Promise<Car> {
    // const user = await this.userService.findOne(role);
    // if ((user.role = 'admin')) {
      const car: Car = new Car();

      car.brand = newCar.brand;
      car.model = newCar.model;
      car.year = newCar.year;
      car.km = newCar.km;
      car.type = newCar.type;
      car.seats = newCar.seats;
      car.color = newCar.color;
      car.engine = newCar.engine;
      car.consum = newCar.consum;
      car.level = newCar.level;
      car.autonomy = newCar.autonomy;
      car.photo = newCar.photo;
      car.price_day = newCar.price_day;
      car.available = newCar.available;
      car.bond = newCar.bond;
      car.gear = newCar.gear;

      return await this.carRepository.save(car);
    // }
  }

  async update(carId: string, newCar: UpdateCarDto): Promise<Car> {
    let car = await this.carRepository.findOne(carId);

    car.brand = newCar.brand;
    car.model = newCar.model;
    car.year = newCar.year;
    car.km = newCar.km;
    car.type = newCar.type;
    car.seats = newCar.seats;
    car.color = newCar.color;
    car.engine = newCar.engine;
    car.consum = newCar.consum;
    car.level = newCar.level;
    car.autonomy = newCar.autonomy;
    car.photo = newCar.photo;
    car.price_day = newCar.price_day;
    car.available = newCar.available;
    car.bond = newCar.bond;
    car.gear = newCar.gear;

    return await this.carRepository.save(car);
  }

  async delete(carId: string): Promise<Car> {
    const car = await this.carRepository.findOne(carId);
    return await this.carRepository.remove(car);
  }
}
