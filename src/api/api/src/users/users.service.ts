import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { LoginDTO } from './dto/login.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    newUser.save();
    return newUser;
  }

  findAll() {
    const allUsers = this.userModel.find();
    return allUsers;
  }

  findOne(id: string) {
    const userId = this.userModel.findById(id);
    return userId;
  }

  async login(login: LoginDTO) {
    const user = await this.userModel.findOne({
      username: login.username,
      password: login.password,
    });
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const { name, username } = updateUserDto;
    return this.userModel
      .updateOne({ _id: id }, { $set: { name, username } })
      .exec();
  }

  updatePassword(id: string, updatePasswordDto: UpdatePasswordDto) {
    const { password } = updatePasswordDto;
    return this.userModel.updateOne({ _id: id }, { $set: { password } }).exec();
  }

  async remove(id: string) {
    await this.userModel.deleteOne({ _id: id }).exec();
    return `This action removes a #${id} user`;
  }
}
