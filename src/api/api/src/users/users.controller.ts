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

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
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
    const user = await this.usersService.verifyEmail(email);

    if (user) {
      return res.json({ message: 'Email valido' });
    }

    return res.status(401).json({ message: 'Email invalido' });
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
