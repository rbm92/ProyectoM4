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
exports.CarService = void 0;
const common_1 = require('@nestjs/common');
const typeorm_1 = require('@nestjs/typeorm');
const typeorm_2 = require('typeorm');
const car_entity_1 = require('./entities/car.entity');
const user_service_1 = require('../user/user.service');
let CarService = class CarService {
  constructor(carRepository, userService) {
    this.carRepository = carRepository;
    this.userService = userService;
  }
  async findCars(query) {
    return await this.carRepository.find({ where: query });
  }
  async sortByPrice(_a = {}) {
    var { order = 1, limit = 0 } = _a,
      query = __rest(_a, ['order', 'limit']);
    let sort;
    if (order == 1) sort = 'ASC';
    if (order == 0) sort = 'DESC';
    return await this.carRepository.find({
      where: query,
      order: { price_day: sort },
      take: limit,
    });
  }
  async sortByYear(_a = {}) {
    var { order = 1, limit = 0 } = _a,
      query = __rest(_a, ['order', 'limit']);
    let sort;
    if (order == 1) sort = 'ASC';
    if (order == 0) sort = 'DESC';
    return await this.carRepository.find({
      where: query,
      order: { year: sort },
      take: limit,
    });
  }
  async findOne(id) {
    try {
      return await this.carRepository.findOne(id);
    } catch (error) {
      throw new common_1.HttpException(
        'car not found',
        common_1.HttpStatus.BAD_REQUEST,
      );
    }
  }
  async create(newCar) {
    try {
      const car = new car_entity_1.Car();
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
    } catch (error) {
      throw new common_1.HttpException(
        'missing data, car was not added',
        common_1.HttpStatus.FORBIDDEN,
      );
    }
  }
  async update(carId, newCar) {
    try {
      const car = await this.carRepository.findOne(carId);
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
    } catch (error) {
      throw new common_1.HttpException(
        'missing data, car was not updated',
        common_1.HttpStatus.FORBIDDEN,
      );
    }
  }
  async delete(carId) {
    try {
      const car = await this.carRepository.findOne(carId);
      return await this.carRepository.remove(car);
    } catch (error) {
      throw new common_1.HttpException(
        'car not found',
        common_1.HttpStatus.FORBIDDEN,
      );
    }
  }
};
CarService = __decorate(
  [
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(car_entity_1.Car)),
    __metadata('design:paramtypes', [
      typeorm_2.Repository,
      user_service_1.UserService,
    ]),
  ],
  CarService,
);
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map
