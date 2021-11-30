import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { UserModule } from './user/user.module';
import { RentalModule } from './rental/rental.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CarModule, UserModule, RentalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
