import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from 'src/auth/dto/login.dto';
// import { LoginUserDto } from '../../auth/dto/login.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  create(@Body() createUserDto: LoginUserDto) {
    return this.userService.create(createUserDto);
  }

  // @Post('login')
  // login(@Body() loginUserDto: LoginUserDto) {
  //   return this.userService.login(loginUserDto);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
    return this.userService.update(id, createUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}