import { Body, Controller, Post, Get } from '@nestjs/common';

import { UserService } from '../shared/user.service';
import { IPayload } from '../interfaces/payload.interface';
import { ILoginContract, IRegisterContract } from './contracts/auth.contract';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() userDTO: ILoginContract) {
    const user = await this.userService.findByLogin(userDTO);
    const payload = {
      email: user.email,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('register')
  async register(@Body() userDTO: IRegisterContract) {
    const user = await this.userService.create(userDTO);
    const payload: IPayload = {
      email: user.email,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }
}
