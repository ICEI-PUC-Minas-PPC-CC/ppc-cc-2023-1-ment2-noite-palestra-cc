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
import { DonatorsService } from './donators.service';
import { CreateDonatorDto } from './dto/create-donator.dto';
import { UpdateDonatorDto } from './dto/update-donator.dto';

@Controller('donators')
export class DonatorsController {
  constructor(private readonly donatorsService: DonatorsService) {}

  @Post('/create')
  create(@Body() createDonatorDto: CreateDonatorDto) {
    return this.donatorsService.createDonator(createDonatorDto);
  }

  @Get('/all')
  findAllDonators() {
    return this.donatorsService.findAllDonators();
  }

  @Get(':id/find')
  findOneDonator(@Param('id') id: string) {
    return this.donatorsService.findOneDonator(id);
  }

  @Patch(':id/update-donator')
  updateDonator(
    @Param('id') id: string,
    @Body() updateDonatorDto: UpdateDonatorDto,
  ) {
    return this.donatorsService.updateDonator(id, updateDonatorDto);
  }

  @Get('/search-donators')
  async findByLetter(@Query('letter') letter: string) {
    return this.donatorsService.searchDonators(letter);
  }

  @Delete(':id/remove-donator')
  removeDonator(@Param('id') id: string) {
    return this.donatorsService.removeDonator(id);
  }
}
