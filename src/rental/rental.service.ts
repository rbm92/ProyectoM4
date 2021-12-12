import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarService } from 'src/car/car.service';
import { UserService } from 'src/user/user.service';
import { getConnection, Repository } from 'typeorm';
import { RentalDto } from './dto/rental.dto';
import { Rental } from './entities/rental.entity';

@Injectable()
export class RentalService {
  constructor(
    @InjectRepository(Rental)
    private rentalRepository: Repository<Rental>,
    private carService: CarService,
    private userService: UserService,
  ) {}

  async create(rentalDto: RentalDto): Promise<Rental> {
    const rental = new Rental();
    const car = await this.carService.findOne(rentalDto.carId);
    const user = await this.userService.findOne(rentalDto.userId);
    let newRental: Rental;

    try {
      if (!car.available)
        throw new HttpException(
          'car not available for rental',
          HttpStatus.BAD_REQUEST,
        );

      car.available = false;
      rental.car = car;
      rental.user = user;

      Object.assign(rental, rentalDto);

      await getConnection().transaction(async (manager) => {
        newRental = await manager.save(rental);
        await manager.save(car);
      });

      return newRental;
    } catch (error) {
      throw new HttpException(
        'the rental procedure was not successful',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findRentals(query: any): Promise<Rental[]> {
    try {
      return await this.rentalRepository.find({ where: query });
    } catch (error) {
      throw new HttpException('rental not found', HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string, rental: RentalDto): Promise<Rental[]> {
    try {
      console.log('FINDONE', rental);
      return await this.rentalRepository.find({
        where: {
          car: rental.carId,
          user: rental.userId,
          return_date: null,
        },
        relations: ['car'],
      });
      
    } catch (error) {
      throw new HttpException('rental not found', HttpStatus.BAD_REQUEST);
    }
  }

  async sortByReturnDate({ order = 1, limit = 0, ...query } = {}): Promise<
    Rental[]
  > {
    let sort;
    if (order == 1) sort = 'ASC';
    if (order == 0) sort = 'DESC';

    return await this.rentalRepository.find({
      where: query,
      order: { return_date: sort },
      take: limit,
    });
  }

  async update(id: string, rentalDto: RentalDto): Promise<Rental> {
    try {
      const [rental] = await this.findOne(id, rentalDto);
      console.log([rental]);
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
    } catch (error) {
      throw new HttpException('rental not found', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(rentalId: string) {
    try {
      const rental = await this.rentalRepository.findOne(rentalId);
      return await this.rentalRepository.remove(rental);
    } catch (error) {
      throw new HttpException('rental not found', HttpStatus.BAD_REQUEST);
    }
  }
}
