import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'You are in http://rentacar-jmrb.herokuapp.com/';
  }
}
