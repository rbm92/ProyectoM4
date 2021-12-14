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
    const user = await this.userService.findOneById(rentalDto.userId);
    let newRental: Rental;

    try {
      if (!car.available)
        throw new HttpException(
          'car not available for rental',
          HttpStatus.BAD_REQUEST,
        );

      if (user.active_rental)
        throw new HttpException(
          'this user already has an active rental',
          HttpStatus.BAD_REQUEST,
        );

      car.available = false;
      user.active_rental = true;
      rental.car = car;
      rental.user = user;

      Object.assign(rental, rentalDto);

      await getConnection().transaction(async (manager) => {
        newRental = await manager.save(rental);
        await manager.save(car);
        await manager.save(user);
      });

      return newRental;
    } catch (error) {
      throw error;
    }
  }

  async findRentals(query: any): Promise<Rental[]> {
    try {
      return await this.rentalRepository.find({
        where: query,
        relations: ['car', 'user'],
      });
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
        relations: ['car', 'user'],
      });
    } catch (error) {
      throw new HttpException('rental not found', HttpStatus.BAD_REQUEST);
    }
  }

  async findOneV2(id: string): Promise<Rental> {
    try {
      const rental = await this.rentalRepository.findOne(id);
      console.log('findOneById rental', rental);
      return rental;
    } catch (error) {
      throw new HttpException('rental not found', HttpStatus.BAD_REQUEST);
    }
  }

  async sortByReturnDate({ order = 1, limit = 0, ...query } = {}): Promise<
    Rental[]
  > {
    try {
      console.log('Console de query', query);

      let sort: any;
      if (order == 1) sort = 'ASC';
      if (order == 0) sort = 'DESC';

      return await this.rentalRepository.find({
        where: query,
        order: { return_date: sort },
        take: limit,
      });
    } catch (error) {}
  }

  async findRentalsOneUser(id: string): Promise<Rental[]> {
    try {
      return await this.rentalRepository.find({
        where: {
          user: id,
        },
      });
    } catch (error) {
      throw new HttpException(
        'user has no rental history',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findRentalsOneCar(id: string): Promise<Rental[]> {
    try {
      return await this.rentalRepository.find({
        where: {
          car: id,
        },
      });
    } catch (error) {
      throw new HttpException(
        'car has no rental history',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: string, rentalDto: RentalDto): Promise<Rental> {
    try {
      const [rental] = await this.findOne(id, rentalDto);
      console.log([rental]);
      const car = await this.carService.findOne(rental.car.id);
      const user = await this.userService.findOneById(rentalDto.userId);

      let newRental: Rental;

      if (!user.active_rental)
        throw new HttpException(
          'this user has no active rentals',
          HttpStatus.BAD_REQUEST,
        );

      if (car.available)
        throw new HttpException(
          'this car is already available',
          HttpStatus.BAD_REQUEST,
        );

      car.available = true;
      user.active_rental = false;
      rental.return_date = new Date();

      await getConnection().transaction(async (manager) => {
        newRental = await manager.save(rental);
        await manager.save(car);
        await manager.save(user);
      });

      return newRental;
    } catch (error) {
      throw error;
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
