import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { LoginDTO } from './dto/login.dto';

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

<<<<<<< Updated upstream
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
=======
  async verifyEmail(emailUser: string): Promise<boolean> {
    const email_user = await this.userModel.findOne({
      email: emailUser,
    });
    return !!email_user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const { name, username } = updateUserDto;
    return this.userModel
      .updateOne({ _id: id }, { $set: { name, username } })
      .exec();
>>>>>>> Stashed changes
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
