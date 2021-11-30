import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarService } from 'src/car/car.service';
import { UserService } from 'src/user/user.service';
import { getConnection, Repository } from 'typeorm';
import { RentalDto } from './dto/rental.dto';
import { UpdateRentalDto } from './dto/update-rental.dto';
import { Rental } from './entities/rental.entity';

@Injectable()
export class RentalService {
  constructor(
    @InjectRepository(Rental) private rentalRepository: Repository<Rental>,
    private carService: CarService,
    private userService: UserService,
  ) { }

  async create(rentalDto): Promise<Rental> {
    const rental = new Rental();
    const car = await this.carService.findOne(rentalDto.carId);
    const user = await this.userService.findOne(rentalDto.userId);
    let newRental: Rental;

    try {
      if (!car.available) throw new Error('This car is currently rented')
      
      car.available = false;
      rental.car = car;
      rental.user = user;

      Object.assign(rental, rentalDto);

      await getConnection().transaction(async manager => {

        newRental = await manager.save(rental)
        await manager.save(car)
      })

      return newRental;


    } catch (error) {

    }

  }

  findAll() {
    return `This action returns all rental`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rental`;
  }

  update(id: number, updateRentalDto: UpdateRentalDto) {
    return `This action updates a #${id} rental`;
  }

  remove(id: number) {
    return `This action removes a #${id} rental`;
  }
}
