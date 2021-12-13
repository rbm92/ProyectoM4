'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.RentalService = void 0;
const common_1 = require('@nestjs/common');
const typeorm_1 = require('@nestjs/typeorm');
const car_service_1 = require('../car/car.service');
const user_service_1 = require('../user/user.service');
const typeorm_2 = require('typeorm');
const rental_entity_1 = require('./entities/rental.entity');
let RentalService = class RentalService {
  constructor(rentalRepository, carService, userService) {
    this.rentalRepository = rentalRepository;
    this.carService = carService;
    this.userService = userService;
  }
  async create(rentalDto) {
    const rental = new rental_entity_1.Rental();
    const car = await this.carService.findOne(rentalDto.carId);
    const user = await this.userService.findOneById(rentalDto.userId);
    let newRental;
    try {
      if (!car.available)
        throw new common_1.HttpException(
          'car not available for rental',
          common_1.HttpStatus.BAD_REQUEST,
        );
      if (user.active_rental)
        throw new common_1.HttpException(
          'this user already has an active rental',
          common_1.HttpStatus.BAD_REQUEST,
        );
      car.available = false;
      user.active_rental = true;
      rental.car = car;
      rental.user = user;
      Object.assign(rental, rentalDto);
      await (0, typeorm_2.getConnection)().transaction(async (manager) => {
        newRental = await manager.save(rental);
        await manager.save(car);
        await manager.save(user);
      });
      return newRental;
    } catch (error) {
      throw new common_1.HttpException(
        'the rental procedure was not successful',
        common_1.HttpStatus.BAD_REQUEST,
      );
    }
  }
  async findRentals(query) {
    try {
      return await this.rentalRepository.find({
        where: query,
        relations: ['car', 'user'],
      });
    } catch (error) {
      throw new common_1.HttpException(
        'rental not found',
        common_1.HttpStatus.BAD_REQUEST,
      );
    }
  }
  async findOne(id, rental) {
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
      throw new common_1.HttpException(
        'rental not found',
        common_1.HttpStatus.BAD_REQUEST,
      );
    }
  }
  async findOneV2(id) {
    try {
      const rental = await this.rentalRepository.findOne(id);
      console.log('findOneById rental', rental);
      return rental;
    } catch (error) {
      throw new common_1.HttpException(
        'rental not found',
        common_1.HttpStatus.BAD_REQUEST,
      );
    }
  }
  async sortByReturnDate(_a = {}) {
    var { order = 1, limit = 0 } = _a,
      query = __rest(_a, ['order', 'limit']);
    try {
      console.log('Console de query', query);
      let sort;
      if (order == 1) sort = 'ASC';
      if (order == 0) sort = 'DESC';
      return await this.rentalRepository.find({
        where: query,
        order: { return_date: sort },
        take: limit,
      });
    } catch (error) {}
  }
  async findRentalsOneUser(id) {
    try {
      return await this.rentalRepository.find({
        where: {
          user: id,
        },
      });
    } catch (error) {
      throw new common_1.HttpException(
        'user has no rental history',
        common_1.HttpStatus.BAD_REQUEST,
      );
    }
  }
  async findRentalsOneCar(id) {
    try {
      return await this.rentalRepository.find({
        where: {
          car: id,
        },
      });
    } catch (error) {
      throw new common_1.HttpException(
        'car has no rental history',
        common_1.HttpStatus.BAD_REQUEST,
      );
    }
  }
  async update(id, rentalDto) {
    try {
      const [rental] = await this.findOne(id, rentalDto);
      console.log([rental]);
      const car = await this.carService.findOne(rental.car.id);
      const user = await this.userService.findOneById(rentalDto.userId);
      let newRental;
      if (!user.active_rental)
        throw new common_1.HttpException(
          'this user has no active rentals',
          common_1.HttpStatus.BAD_REQUEST,
        );
      if (car.available)
        throw new common_1.HttpException(
          'this car is already available',
          common_1.HttpStatus.BAD_REQUEST,
        );
      car.available = true;
      user.active_rental = false;
      rental.return_date = new Date();
      await (0, typeorm_2.getConnection)().transaction(async (manager) => {
        newRental = await manager.save(rental);
        await manager.save(car);
        await manager.save(user);
      });
      return newRental;
    } catch (error) {
      throw new common_1.HttpException(
        'rental not found',
        common_1.HttpStatus.BAD_REQUEST,
      );
    }
  }
  async remove(rentalId) {
    try {
      const rental = await this.rentalRepository.findOne(rentalId);
      return await this.rentalRepository.remove(rental);
    } catch (error) {
      throw new common_1.HttpException(
        'rental not found',
        common_1.HttpStatus.BAD_REQUEST,
      );
    }
  }
};
RentalService = __decorate(
  [
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rental_entity_1.Rental)),
    __metadata('design:paramtypes', [
      typeorm_2.Repository,
      car_service_1.CarService,
      user_service_1.UserService,
    ]),
  ],
  RentalService,
);
exports.RentalService = RentalService;
//# sourceMappingURL=rental.service.js.map
