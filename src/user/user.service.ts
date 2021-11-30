import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';
import { Encryptation } from 'src/common/utils/encryptation.helper';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    const user = new User();
    Object.assign(user, createUserDto);
    return await this.userRepository.save(user);
  }

  async login({ email, password }: LoginUserDto) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) throw new HttpException('User or password incorrect', HttpStatus.UNAUTHORIZED);

    const match = await Encryptation.comparePassword(password, user.password);
    if (!match) throw new HttpException('User or password incorrect', HttpStatus.UNAUTHORIZED);

    return await this.userRepository.save(user);
  }

  async update(userId: string, newUser: UpdateUserDto): Promise<User> {    
    let user = await this.userRepository.findOne(userId);
    user.email = newUser.email
    user.password = newUser.password
    user.photo = newUser.photo
    user.license_num = newUser.license_num
    user.address = newUser.address
    user.active_rental = newUser.active_rental
    
    return await this.userRepository.save(user);
  }

  async delete(userId: string): Promise<User> {
    const user = await this.userRepository.findOne(userId)
    return await this.userRepository.remove(user)

  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }


}
