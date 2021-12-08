import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Encryptation } from 'src/common/utils/encryptation.helper'
import { LoginUserDto } from 'src/auth/dto/login.dto'
import { UserService } from 'src/user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    console.log(email, pass)
    const user = await this.userService.findOne(email)
    if (!user) return null
    const isValidPassword = await Encryptation.comparePassword(
      pass,
      user.password,
    )

    if (isValidPassword) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, photo, ...result } = user

      return result
    }
    return null
  }

  async login(user: LoginUserDto) {
    console.log(user)
    const payload = { email: user.email }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}