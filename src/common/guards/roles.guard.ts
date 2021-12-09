import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private userService: UserService
        ) { }

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        console.log('Soy el console.log del guard', roles);

        // const user_role = this.userRepository.findOne(CreateUserDto.role);

    //     if (roles.find(element => element === 'admin') === 'admin')
    //     return true;
    // }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if(roles === user.role) return true;

    // return matchRoles(roles, user.roles);
}
}