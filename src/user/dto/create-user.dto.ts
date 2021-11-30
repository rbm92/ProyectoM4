import { PartialType } from "@nestjs/mapped-types";
import { LoginUserDto } from "./login-user.dto"

export class CreateUserDto extends PartialType(LoginUserDto) {
    readonly id: string
    readonly photo: string
    readonly license_num: string
    readonly address: string
    readonly active_rental: boolean
    readonly role: string
}
