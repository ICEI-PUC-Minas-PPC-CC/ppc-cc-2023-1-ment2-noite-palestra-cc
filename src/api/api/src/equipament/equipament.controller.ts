import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EquipamentService } from './equipament.service';
import { CreateEquipamentDto } from './dto/create-equipament.dto';
import { UpdateEquipamentDto } from './dto/update-equipament.dto';

@Controller('equipament')
export class EquipamentController {
  constructor(private readonly equipamentService: EquipamentService) {}

  @Post('/create')
  create(@Body() createEquipamentDto: CreateEquipamentDto) {
    return this.equipamentService.createEquipament(createEquipamentDto);
  }

  @Get('/all')
  findAllEquipament() {
    return this.equipamentService.findAllEquipament();
  }

  @Get(':id/find')
  findOneEquipament(@Param('id') id: string) {
    return this.equipamentService.findOneEquipament(id);
  }

  @Patch(':id/update-equipament')
  updateEquipament(
    @Param('id') id: string,
    @Body() updateEquipamentDto: UpdateEquipamentDto,
  ) {
    return this.equipamentService.updateEquipament(id, updateEquipamentDto);
  }

  @Get('/search-equipament')
  async findByLetter(@Query('letter') letter: string) {
    return this.equipamentService.searchEquipament(letter);
  }

  @Get('/search-equipament-code')
  async findByCode(@Query('code') code: string) {
    return this.equipamentService.searchEquipamentCode(code);
  }

  @Delete(':id/remove-equipament')
  removeEquipament(@Param('id') id: string) {
    return this.equipamentService.removeEquipament(id);
  }
}
