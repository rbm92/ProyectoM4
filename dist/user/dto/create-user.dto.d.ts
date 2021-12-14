import { LoginUserDto } from '../../auth/dto/login.dto';
declare const CreateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<LoginUserDto>>;
export declare class CreateUserDto extends CreateUserDto_base {
    readonly id: string;
    readonly photo: string;
    readonly license_num: string;
    readonly address: string;
    readonly active_rental: boolean;
    readonly role: string;
}
export {};
