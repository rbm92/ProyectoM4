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
Object.defineProperty(exports, '__esModule', { value: true });
exports.Rental = void 0;
const car_entity_1 = require('../../car/entities/car.entity');
const user_entity_1 = require('../../user/entities/user.entity');
const typeorm_1 = require('typeorm');
const swagger_1 = require('@nestjs/swagger');
let Rental = class Rental {};
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'asd123e99' }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata('design:type', String),
  ],
  Rental.prototype,
  'id',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'ua12234ascx' }),
    (0, typeorm_1.ManyToOne)(
      () => car_entity_1.Car,
      (car) => car.id,
    ),
    (0, typeorm_1.JoinColumn)(),
    __metadata('design:type', car_entity_1.Car),
  ],
  Rental.prototype,
  'car',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'uuidlap214' }),
    (0, typeorm_1.ManyToOne)(
      () => user_entity_1.User,
      (user) => user.id,
    ),
    (0, typeorm_1.JoinColumn)(),
    __metadata('design:type', user_entity_1.User),
  ],
  Rental.prototype,
  'user',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: '2021-12-12' }),
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime' }),
    __metadata('design:type', Date),
  ],
  Rental.prototype,
  'start_date',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: '2021-12-22' }),
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata('design:type', Date),
  ],
  Rental.prototype,
  'finish_date',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: '2021-12-20' }),
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata('design:type', Date),
  ],
  Rental.prototype,
  'return_date',
  void 0,
);
Rental = __decorate([(0, typeorm_1.Entity)()], Rental);
exports.Rental = Rental;
//# sourceMappingURL=rental.entity.js.map
