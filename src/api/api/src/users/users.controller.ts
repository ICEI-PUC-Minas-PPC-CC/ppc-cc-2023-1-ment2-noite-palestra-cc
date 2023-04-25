import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDTO } from './dto/login.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Post('/login')
  async login(@Body() login: LoginDTO, @Res() res) {
    const user = await this.usersService.login(login);
    if (user) {
      return res
        .status(HttpStatus.OK)
        .json({ message: 'Usuário autenticado!' });
    }

    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: 'Credenciais inválidas!' });
  }

  @Post('/verify-email')
  @HttpCode(200)
  async verifyEmail(@Body('email') email: string, @Res() res) {
    const userID = await this.usersService.verifyEmail(email);

    if (userID) {
      return res.status(200).json({ message: userID });
    }

    return res.status(401).json({ message: 'Email inválido' });
  }

  @Get()
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return this.usersService.findOneUser(id);
  }

  @Patch(':id')
  updateUserData(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUserData(id, updateUserDto);
  }

  @Patch(':id/change-password')
  updatePassword(
    @Param('id') id: string,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ) {
    return this.usersService.updatePassword(id, updatePasswordDto);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(id);
  }
}
