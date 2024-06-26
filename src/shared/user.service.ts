import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

import {
  ILoginContract,
  IRegisterContract,
} from '../auth/contracts/auth.contract';
import { IPayload } from '../interfaces/payload.interface';
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  async create(userDTO: IRegisterContract) {
    const { email } = userDTO;
    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const createdUser = new this.userModel(userDTO);
    await createdUser.save();
    //return this.sanitizeUser(createdUser);
    return createdUser;
  }

  async find() {
    return await this.userModel.find();
  }

  async findByLogin(userDTO: ILoginContract) {
    const { email, password } = userDTO;
    const user = await this.userModel
      .findOne({ email })
      .select('email password');
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    if (await bcrypt.compare(password, user.password)) {
      return user;
      //return this.sanitizeUser(user);
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }

  async findByPayload(payload: IPayload) {
    const { email } = payload;
    return await this.userModel.findOne({ email });
  }
}
