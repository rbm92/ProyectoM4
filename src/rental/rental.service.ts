import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarService } from 'src/car/car.service';
import { UserService } from 'src/user/user.service';
import { getConnection, Repository } from 'typeorm';
import { RentalDto } from './dto/rental.dto';
import { Rental } from './entities/rental.entity';

@Injectable()
export class RentalService {
  constructor(
    @InjectRepository(Rental) private rentalRepository: Repository<Rental>,
    private carService: CarService,
    private userService: UserService,
  ) {}

  async create(rentalDto: RentalDto): Promise<Rental> {
    const rental = new Rental();
    const car = await this.carService.findOne(rentalDto.carId);
    const user = await this.userService.findOne(rentalDto.userId);
    let newRental: Rental;

    car.available = false;
    rental.car = car;
    rental.user = user;

    Object.assign(rental, rentalDto);

    await getConnection().transaction(async (manager) => {
      newRental = await manager.save(rental);
      await manager.save(car);
    });

    return newRental;
  }

  findAll() {
    return `This action returns all rental`;
  }

  async findOne(id: string, rental: RentalDto): Promise<Rental[]> {
    return await this.rentalRepository.find({
      where: {
        car: rental.carId,
        user: rental.userId,
        return_date: null,
      },
      relations: ['car'],
    });
  }

  async update(id: string, rentalDto: RentalDto): Promise<Rental> {
    const [rental] = await this.findOne(id, rentalDto);
    const car = await this.carService.findOne(rental.car.id);

    let newRental: Rental;

    if (car.available) return;

    car.available = true;
    rental.return_date = new Date();

    await getConnection().transaction(async (manager) => {
      newRental = await manager.save(rental);
      await manager.save(car);
    });

    return newRental;
  }

  remove(id: string) {
    return `This action removes a #${id} rental`;
  }
}
