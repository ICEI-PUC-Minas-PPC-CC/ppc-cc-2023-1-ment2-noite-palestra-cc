import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonatorsService } from './donators.service';
import { CreateDonatorDto } from './dto/create-donator.dto';
import { UpdateDonatorDto } from './dto/update-donator.dto';

@Controller('donators')
export class DonatorsController {
  constructor(private readonly donatorsService: DonatorsService) {}

  @Post()
  create(@Body() createDonatorDto: CreateDonatorDto) {
    return this.donatorsService.create(createDonatorDto);
  }

  @Get()
  findAll() {
    return this.donatorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donatorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonatorDto: UpdateDonatorDto) {
    return this.donatorsService.update(+id, updateDonatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donatorsService.remove(+id);
  }
}
