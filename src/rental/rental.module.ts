import { Module } from '@nestjs/common';
import { RentalService } from './rental.service';
import { RentalController } from './rental.controller';
import { CarModule } from 'src/car/car.module';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rental } from './entities/rental.entity';

@Module({
  imports: [CarModule, UserModule, TypeOrmModule.forFeature([Rental])],
  controllers: [RentalController],
  providers: [RentalService],
  exports: [RentalService],
})
export class RentalModule {}
