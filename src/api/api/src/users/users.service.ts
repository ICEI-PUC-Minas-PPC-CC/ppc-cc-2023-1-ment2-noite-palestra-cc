import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { LoginDTO } from './dto/login.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateResult } from 'mongodb';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const { name, email, username, password } = createUserDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const createdUser = new this.userModel({
      name,
      email,
      username,
      password: hashedPassword,
    });
    return createdUser.save();
  }

  findAllUsers() {
    const allUsers = this.userModel.find();
    return allUsers;
  }

  findOneUser(id: string) {
    const userId = this.userModel.findById(id);
    return userId;
  }

  async searchUsers(letter: string): Promise<User[]> {
    console.log(letter);
    const regex = new RegExp(`^${letter}`, 'i');
    return this.userModel.find({ name: regex }).exec();
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

  async updateUserData(id: string, updateUserDto: UpdateUserDto): Promise<any> {
    const { name, username, password, email } = updateUserDto;
    const updateObject: any = { name, username, email };
    if (password) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      updateObject.password = hashedPassword;
    }
    return this.userModel.updateOne({ _id: id }, { $set: updateObject }).exec();
  }

  async updatePassword(
    id: string,
    updatePasswordDto: UpdatePasswordDto,
  ): Promise<{ success: boolean }> {
    const { password, verifyPassword } = updatePasswordDto;
    if (password === verifyPassword) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result: UpdateResult = await this.userModel
        .updateOne({ _id: id }, { $set: { password: hashedPassword } })
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

  async removeUser(id: string) {
    await this.userModel.deleteOne({ _id: id }).exec();
    return `This action removes a #${id} user`;
  }
}
