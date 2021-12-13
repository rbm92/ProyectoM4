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
exports.UserService = void 0;
const common_1 = require('@nestjs/common');
const typeorm_1 = require('@nestjs/typeorm');
const user_entity_1 = require('./entities/user.entity');
const typeorm_2 = require('typeorm');
const login_dto_1 = require('../auth/dto/login.dto');
let UserService = class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async create(createUserDto) {
    const user = new user_entity_1.User();
    Object.assign(user, createUserDto);
    return await this.userRepository.save(user);
  }
  async update(userId, newUser) {
    const user = await this.userRepository.findOne(userId);
    user.email = newUser.email;
    user.password = newUser.password;
    user.photo = newUser.photo;
    user.license_num = newUser.license_num;
    user.address = newUser.address;
    return await this.userRepository.save(user);
  }
  async delete(userId) {
    const user = await this.userRepository.findOne(userId);
    return await this.userRepository.remove(user);
  }
  async findUsers(query) {
    return await this.userRepository.find({ where: query });
  }
  async findOne(email) {
    try {
      const user = await this.userRepository.findOne({ email });
      console.log('findOneEmail', user);
      return user;
    } catch (error) {
      throw new common_1.HttpException(
        'user not found',
        common_1.HttpStatus.BAD_REQUEST,
      );
    }
  }
  async findOneById(id) {
    try {
      const user = await this.userRepository.findOne(id);
      console.log('findOneById', user);
      return user;
    } catch (error) {
      throw new common_1.HttpException(
        'user not found',
        common_1.HttpStatus.BAD_REQUEST,
      );
    }
  }
};
UserService = __decorate(
  [
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata('design:paramtypes', [typeorm_2.Repository]),
  ],
  UserService,
);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
