import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from 'src/auth/dto/login.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { Role } from 'src/auth/model/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { User } from './entities/user.entity';
import { Request } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';
// import { LoginUserDto } from '../../auth/dto/login.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Registro de usuario
  @Post('register')
  create(@Body() createUserDto: LoginUserDto) {
    return this.userService.create(createUserDto);
  }

  // @Post('login')
  // login(@Body() loginUserDto: LoginUserDto) {
  //   return this.userService.login(loginUserDto);
  // }

  // Modificación del perfil de usuario
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
    return this.userService.update(id, createUserDto);
  }

  // Eliminación del perfil de usuario
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }

  // Lista de usuarios registrados (incluído filtro por parámetros)
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  @Roles(Role.Admin)
  async findUsers(@Req() req: Request): Promise<User[]> {
    return await this.userService.findUsers(req.query);
  }

  // Encontrar usuario por ID
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  @Roles(Role.Admin)
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}
