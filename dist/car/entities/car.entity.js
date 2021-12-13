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
exports.Car = void 0;
const typeorm_1 = require('typeorm');
const swagger_1 = require('@nestjs/swagger');
let Car = class Car {};
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 99 }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata('design:type', String),
  ],
  Car.prototype,
  'id',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'Toyota' }),
    (0, typeorm_1.Column)(),
    __metadata('design:type', String),
  ],
  Car.prototype,
  'brand',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'Corolla' }),
    (0, typeorm_1.Column)(),
    __metadata('design:type', String),
  ],
  Car.prototype,
  'model',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 2018 }),
    (0, typeorm_1.Column)(),
    __metadata('design:type', Number),
  ],
  Car.prototype,
  'year',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 20000 }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata('design:type', Number),
  ],
  Car.prototype,
  'km',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'tourism' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata('design:type', String),
  ],
  Car.prototype,
  'type',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 5 }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata('design:type', Number),
  ],
  Car.prototype,
  'seats',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'blue' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata('design:type', String),
  ],
  Car.prototype,
  'color',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'gasoline' }),
    (0, typeorm_1.Column)({ default: 'gasoline' }),
    __metadata('design:type', String),
  ],
  Car.prototype,
  'engine',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 7 }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata('design:type', Number),
  ],
  Car.prototype,
  'consum',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, typeorm_1.Column)({ default: true }),
    __metadata('design:type', Boolean),
  ],
  Car.prototype,
  'level',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 700 }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata('design:type', Number),
  ],
  Car.prototype,
  'autonomy',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'toyota.png' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata('design:type', String),
  ],
  Car.prototype,
  'photo',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 30 }),
    (0, typeorm_1.Column)(),
    __metadata('design:type', Number),
  ],
  Car.prototype,
  'price_day',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, typeorm_1.Column)({ default: true }),
    __metadata('design:type', Boolean),
  ],
  Car.prototype,
  'available',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata('design:type', Number),
  ],
  Car.prototype,
  'bond',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'manual' }),
    (0, typeorm_1.Column)({ default: 'manual' }),
    __metadata('design:type', String),
  ],
  Car.prototype,
  'gear',
  void 0,
);
Car = __decorate([(0, typeorm_1.Entity)()], Car);
exports.Car = Car;
//# sourceMappingURL=car.entity.js.map
