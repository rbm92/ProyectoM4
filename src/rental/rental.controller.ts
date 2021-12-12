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
import { AuthGuard } from '@nestjs/passport';
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

  // Encontrar reservas por ID
  @Get(':id')
  async findOne(@Param('id') id: string, @Body() rentalDto: RentalDto) {
    return await this.rentalService.findOne(id, rentalDto);
  }

  // Ordenar por fecha de devolución
  @UseGuards(RolesGuard)
  @Get('return_date')
  @Roles(Role.Admin)
  async sortByYear(@Req() req: Request): Promise<Rental[]> {
    return await this.rentalService.sortByReturnDate(req.query);
  }

  // Actualizar reserva (devolver coche)
  @UseGuards(RolesGuard)
  @Patch(':id')
  @Roles(Role.Admin)
  async update(@Param('id') id: string, @Body() rentalDto: RentalDto) {
    return await this.rentalService.update(id, rentalDto);
  }

  // Eliminar (cancelar) reserva
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalService.remove(id);
  }
}
