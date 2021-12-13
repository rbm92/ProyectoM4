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
exports.CarDto = void 0;
const swagger_1 = require('@nestjs/swagger');
class CarDto {}
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 99 }),
    __metadata('design:type', String),
  ],
  CarDto.prototype,
  'id',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'Toyota' }),
    __metadata('design:type', String),
  ],
  CarDto.prototype,
  'brand',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'Corolla' }),
    __metadata('design:type', String),
  ],
  CarDto.prototype,
  'model',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 2018 }),
    __metadata('design:type', Number),
  ],
  CarDto.prototype,
  'year',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 20000 }),
    __metadata('design:type', Number),
  ],
  CarDto.prototype,
  'km',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'tourism' }),
    __metadata('design:type', String),
  ],
  CarDto.prototype,
  'type',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 5 }),
    __metadata('design:type', Number),
  ],
  CarDto.prototype,
  'seats',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'blue' }),
    __metadata('design:type', String),
  ],
  CarDto.prototype,
  'color',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'gasoline' }),
    __metadata('design:type', String),
  ],
  CarDto.prototype,
  'engine',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 7 }),
    __metadata('design:type', Number),
  ],
  CarDto.prototype,
  'consum',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata('design:type', Boolean),
  ],
  CarDto.prototype,
  'level',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 700 }),
    __metadata('design:type', Number),
  ],
  CarDto.prototype,
  'autonomy',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'toyota.png' }),
    __metadata('design:type', String),
  ],
  CarDto.prototype,
  'photo',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 30 }),
    __metadata('design:type', Number),
  ],
  CarDto.prototype,
  'price_day',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata('design:type', Boolean),
  ],
  CarDto.prototype,
  'available',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    __metadata('design:type', Number),
  ],
  CarDto.prototype,
  'bond',
  void 0,
);
__decorate(
  [
    (0, swagger_1.ApiProperty)({ example: 'manual' }),
    __metadata('design:type', String),
  ],
  CarDto.prototype,
  'gear',
  void 0,
);
exports.CarDto = CarDto;
//# sourceMappingURL=car.dto.js.map
