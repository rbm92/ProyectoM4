import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from 'src/auth/dto/login.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: LoginUserDto) {
    const user = new User();
    Object.assign(user, createUserDto);
    return await this.userRepository.save(user);
  }

  // async login({ email, password }: LoginUserDto) {
  //   const user = await this.userRepository.findOne({ where: { email } });
  //   if (!user) throw new HttpException('User or password incorrect', HttpStatus.UNAUTHORIZED);

  //   const match = await Encryptation.comparePassword(password, user.password);
  //   if (!match) throw new HttpException('User or password incorrect', HttpStatus.UNAUTHORIZED);

  //   return await this.userRepository.save(user);
  // }

  async update(userId: string, newUser: CreateUserDto): Promise<User> {
    const user = await this.userRepository.findOne(userId);
    user.email = newUser.email;
    user.password = newUser.password;
    user.photo = newUser.photo;
    user.license_num = newUser.license_num;
    user.address = newUser.address;

    return await this.userRepository.save(user);
  }

  async delete(userId: string): Promise<User> {
    const user = await this.userRepository.findOne(userId);
    return await this.userRepository.remove(user);
  }

  async findUsers(query: any): Promise<User[]> {
    return await this.userRepository.find({ where: query });
  }

  async findOne(email: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ email });
      console.log('findOneEmail', user);
      return user;
    } catch (error) {
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
    }
  }

  async findOneById(id: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne(id);
      console.log('findOneById', user);
      return user;
    } catch (error) {
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
    }
  }
}
