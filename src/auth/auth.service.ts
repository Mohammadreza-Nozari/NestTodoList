import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IPayload } from '../interfaces/payload.interface';
import { UserService } from '../shared/user.service';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signPayload(payload: IPayload) {
    //TODO get from env
    const SECRET_KEY: string = 'enunlugardelamancha';
    return sign(payload, SECRET_KEY, { expiresIn: '1h' });
  }

  async validateUser(payload: IPayload) {
    return await this.userService.findByPayload(payload);
  }
}
