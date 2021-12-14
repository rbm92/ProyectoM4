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
exports.UserController = void 0;
const common_1 = require('@nestjs/common');
const user_service_1 = require('./user.service');
const create_user_dto_1 = require('./dto/create-user.dto');
const login_dto_1 = require('../auth/dto/login.dto');
const jwt_auth_guard_1 = require('../auth/guards/jwt-auth.guard');
const roles_decorators_1 = require('../auth/decorators/roles.decorators');
const role_enum_1 = require('../auth/model/role.enum');
const roles_guard_1 = require('../auth/guards/roles.guard');
const swagger_1 = require('@nestjs/swagger');
let UserController = class UserController {
  constructor(userService) {
    this.userService = userService;
  }
  create(createUserDto) {
    return this.userService.create(createUserDto);
  }
  update(id, createUserDto) {
    return this.userService.update(id, createUserDto);
  }
  delete(id) {
    return this.userService.delete(id);
  }
  async findUsers(req) {
    return await this.userService.findUsers(req.query);
  }
  findOne(id) {
    return this.userService.findOne(id);
  }
};
__decorate(
  [
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [login_dto_1.LoginUserDto]),
    __metadata('design:returntype', void 0),
  ],
  UserController.prototype,
  'create',
  null,
);
__decorate(
  [
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String, create_user_dto_1.CreateUserDto]),
    __metadata('design:returntype', void 0),
  ],
  UserController.prototype,
  'update',
  null,
);
__decorate(
  [
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  UserController.prototype,
  'delete',
  null,
);
__decorate(
  [
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(
      jwt_auth_guard_1.JwtAuthGuard,
      roles_guard_1.RolesGuard,
    ),
    (0, common_1.Get)(),
    (0, roles_decorators_1.Roles)(role_enum_1.Role.Admin),
    __param(0, (0, common_1.Req)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object]),
    __metadata('design:returntype', Promise),
  ],
  UserController.prototype,
  'findUsers',
  null,
);
__decorate(
  [
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(
      jwt_auth_guard_1.JwtAuthGuard,
      roles_guard_1.RolesGuard,
    ),
    (0, common_1.Get)(':id'),
    (0, roles_decorators_1.Roles)(role_enum_1.Role.Admin),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  UserController.prototype,
  'findOne',
  null,
);
UserController = __decorate(
  [
    (0, common_1.Controller)('user'),
    __metadata('design:paramtypes', [user_service_1.UserService]),
  ],
  UserController,
);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
