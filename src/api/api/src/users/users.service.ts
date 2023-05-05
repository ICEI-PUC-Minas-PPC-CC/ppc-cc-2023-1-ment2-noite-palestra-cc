import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { LoginDTO } from './dto/login.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateResult } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    newUser.save();
    return newUser;
  }

  findAllUsers() {
    const allUsers = this.userModel.find();
    return allUsers;
  }

  findOneUser(id: string) {
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

  async verifyEmail(emailUser: string): Promise<string | null> {
    const user = await this.userModel.findOne({ email: emailUser });
    return user ? user._id.toString() : null;
  }

  async findUser(name: string) {
    const user = await this.userModel.find({ name: name });
    return user;
  }

  // updateUserData(id: string, updateUserDto: UpdateUserDto) {
  //   const { name, username } = updateUserDto;
  //   return this.userModel
  //     .updateOne({ _id: id }, { $set: { name, username } })
  //     .exec();
  // }

  async removeUser(id: string) {
    await this.userModel.deleteOne({ _id: id }).exec();
    return `This action removes a #${id} user`;
  }

  async updatePassword(
    id: string,
    updatePasswordDto: UpdatePasswordDto,
  ): Promise<{ success: boolean }> {
    const { password, verifyPassword } = updatePasswordDto;
    if (password === verifyPassword) {
      const result: UpdateResult = await this.userModel
        .updateOne({ _id: id }, { $set: { password: password } })
        .exec();
      if (result && result.modifiedCount > 0) {
        return { success: true };
      }
      return { success: false };
    } else {
      throw new HttpException(
        'As senhas não conferem',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
