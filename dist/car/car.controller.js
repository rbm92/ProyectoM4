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
Object.defineProperty(exports, '__esModule', { value: true });
exports.CarController = void 0;
const common_1 = require('@nestjs/common');
const car_service_1 = require('./car.service');
const car_dto_1 = require('./dto/car.dto');
const update_car_dto_1 = require('./dto/update-car.dto');
const roles_decorators_1 = require('../auth/decorators/roles.decorators');
const roles_guard_1 = require('../auth/guards/roles.guard');
const role_enum_1 = require('../auth/model/role.enum');
const jwt_auth_guard_1 = require('../auth/guards/jwt-auth.guard');
const swagger_1 = require('@nestjs/swagger');
let CarController = class CarController {
  constructor(carService) {
    this.carService = carService;
  }
  async findCars(req) {
    return await this.carService.findCars(req.query);
  }
  async sortByPrice(req) {
    return await this.carService.sortByPrice(req.query);
  }
  async sortByYear(req) {
    return await this.carService.sortByYear(req.query);
  }
  findOne(id) {
    return this.carService.findOne(id);
  }
  create(createCarDto) {
    return this.carService.create(createCarDto);
  }
  update(id, updateCarDto) {
    return this.carService.update(id, updateCarDto);
  }
  delete(id) {
    return this.carService.delete(id);
  }
};
__decorate(
  [
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object]),
    __metadata('design:returntype', Promise),
  ],
  CarController.prototype,
  'findCars',
  null,
);
__decorate(
  [
    (0, common_1.Get)('price'),
    __param(0, (0, common_1.Req)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object]),
    __metadata('design:returntype', Promise),
  ],
  CarController.prototype,
  'sortByPrice',
  null,
);
__decorate(
  [
    (0, common_1.Get)('year'),
    __param(0, (0, common_1.Req)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object]),
    __metadata('design:returntype', Promise),
  ],
  CarController.prototype,
  'sortByYear',
  null,
);
__decorate(
  [
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  CarController.prototype,
  'findOne',
  null,
);
__decorate(
  [
    (0, common_1.UseGuards)(
      jwt_auth_guard_1.JwtAuthGuard,
      roles_guard_1.RolesGuard,
    ),
    (0, common_1.Post)(),
    (0, roles_decorators_1.Roles)(role_enum_1.Role.Admin),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __param(0, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [car_dto_1.CarDto]),
    __metadata('design:returntype', void 0),
  ],
  CarController.prototype,
  'create',
  null,
);
__decorate(
  [
    (0, common_1.UseGuards)(
      jwt_auth_guard_1.JwtAuthGuard,
      roles_guard_1.RolesGuard,
    ),
    (0, common_1.Patch)(':id'),
    (0, roles_decorators_1.Roles)(role_enum_1.Role.Admin),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String, update_car_dto_1.UpdateCarDto]),
    __metadata('design:returntype', void 0),
  ],
  CarController.prototype,
  'update',
  null,
);
__decorate(
  [
    (0, common_1.UseGuards)(
      jwt_auth_guard_1.JwtAuthGuard,
      roles_guard_1.RolesGuard,
    ),
    (0, common_1.Delete)(':id'),
    (0, roles_decorators_1.Roles)(role_enum_1.Role.Admin),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  CarController.prototype,
  'delete',
  null,
);
CarController = __decorate(
  [
    (0, common_1.Controller)('car'),
    __metadata('design:paramtypes', [car_service_1.CarService]),
  ],
  CarController,
);
exports.CarController = CarController;
//# sourceMappingURL=car.controller.js.map
