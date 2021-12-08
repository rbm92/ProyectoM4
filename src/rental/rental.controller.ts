import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RentalService } from './rental.service';
import { RentalDto } from './dto/rental.dto';
import { AuthGuard } from '@nestjs/passport'

@UseGuards(AuthGuard('jwt'))
@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Post()
  async create(@Body() rentalDto: RentalDto) {
    return await this.rentalService.create(rentalDto);
  }

  @Get()
  findAll() {
    return this.rentalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Body() rentalDto: RentalDto) {
    return await this.rentalService.findOne(id, rentalDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() rentalDto: RentalDto) {
    return await this.rentalService.update(id, rentalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalService.remove(id);
  }
}
function ApiBearerAuth(arg0: string) {
  throw new Error('Function not implemented.');
}

