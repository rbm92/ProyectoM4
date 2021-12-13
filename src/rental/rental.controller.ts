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
import { RentalService } from './rental.service';
import { RentalDto } from './dto/rental.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/model/role.enum';
import { Rental } from './entities/rental.entity';
import { Request } from 'express';

@UseGuards(JwtAuthGuard)
@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  // Crear (hacer) reserva
  @Post()
  async create(@Body() rentalDto: RentalDto) {
    return await this.rentalService.create(rentalDto);
  }

  // Encontrar reservas (incluído filtro por parámetros)
  @UseGuards(RolesGuard)
  @Get()
  @Roles(Role.Admin)
  async findRentals(@Req() req: Request): Promise<Rental[]> {
    return await this.rentalService.findRentals(req.query);
  }

  // // Encontrar reservas por ID
  // @Get(':id')
  // async findOne(@Param('id') id: string, @Body() rentalDto: RentalDto) {
  //   return await this.rentalService.findOne(id, rentalDto);
  // }

  // Ordenar por fecha de devolución
  @UseGuards(RolesGuard)
  @Get('retdate')
  @Roles(Role.Admin)
  async sortByReturnDate(@Req() req: Request): Promise<Rental[]> {
    return await this.rentalService.sortByReturnDate(req.query);
  }

  // Historial de reservas de un coche
  @UseGuards(RolesGuard)
  @Get('car/:id')
  @Roles(Role.Admin)
  async findRentalsOneCar(@Param('id') id: string): Promise<Rental[]> {
    return await this.rentalService.findRentalsOneCar(id);
  }

  // Mostrar las reservas de un usuario
  @Get('user/:id')
  async findRentalsOneUser(@Param('id') id: string): Promise<Rental[]> {
    return await this.rentalService.findRentalsOneUser(id);
  }

  // Actualizar reserva (devolver coche)
  @UseGuards(RolesGuard)
  @Patch(':id')
  @Roles(Role.Admin)
  async update(@Param('id') id: string, @Body() rentalDto: RentalDto) {
    return await this.rentalService.update(id, rentalDto);
  }

  // Encontrar una reserva
  @Get(':id')
  async findOneV2(@Param('id') id: string) {
    return await this.rentalService.findOneV2(id);
  }

  // Eliminar (cancelar) reserva
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalService.remove(id);
  }
}
