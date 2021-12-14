import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from 'src/auth/dto/login.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: LoginUserDto): Promise<User>;
    update(userId: string, newUser: CreateUserDto): Promise<User>;
    delete(userId: string): Promise<User>;
    findUsers(query: any): Promise<User[]>;
    findOne(email: string): Promise<User>;
    findOneById(id: string): Promise<User>;
}
