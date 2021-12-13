import { Car } from 'src/car/entities/car.entity';
import { User } from 'src/user/entities/user.entity';
export declare class Rental {
  id: string;
  car: Car;
  user: User;
  start_date: Date;
  finish_date: Date;
  return_date: Date;
}
