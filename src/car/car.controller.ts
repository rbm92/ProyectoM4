import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query, UseGuards, SetMetadata } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './dto/car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../common/utils/roles.decorators'
import { RolesGuard } from 'src/common/guards/roles.guard';

@Controller('car')
@UseGuards(RolesGuard)
export class CarController {
  constructor(private readonly carService: CarService) { }
  
  // Encontrar coches (incluído filtro por parámetros)
  @Get()
  async findCars(@Req() req: Request): Promise<Car[]> {
    return await this.carService.findCars(req.query)
  }

  // Ordenar por precio
  @Get('price')
  async sortByPrice(@Req() req: Request): Promise<Car[]> {
    return await this.carService.sortByPrice(req.query)
  }
  
  // Ordenar por año
  @Get('year')
  async sortByYear(@Req() req: Request): Promise<Car[]> {
    return await this.carService.sortByYear(req.query)
  }
  
  // Encontrar coche por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carService.findOne(id);
  }

  // // Añadir coche
  // @UseGuards(AuthGuard('jwt'))
  // @Post()
  // @Roles('admin')
  // async create(@Req() req: Request): Promise<CarDto> {
  //   return await this.carService.create(req.query);
  // }

  // Añadir coche
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @Roles('admin')
  create(@Body() createCarDto: CarDto) {
    return this.carService.create(createCarDto);
  }

  // Actualizar un coche (buscar por ID)
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(id, updateCarDto);
  }

  // Eliminar un coche
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.carService.delete(id);
  }
}