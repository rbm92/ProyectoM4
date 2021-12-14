import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from 'src/auth/dto/login.dto';
import { User } from './entities/user.entity';
import { Request } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: LoginUserDto): Promise<User>;
    update(id: string, createUserDto: CreateUserDto): Promise<User>;
    delete(id: string): Promise<User>;
    findUsers(req: Request): Promise<User[]>;
    findOne(id: string): Promise<User>;
}
