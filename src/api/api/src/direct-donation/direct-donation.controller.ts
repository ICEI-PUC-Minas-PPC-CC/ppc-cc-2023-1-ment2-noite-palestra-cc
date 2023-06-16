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
import { DirectDonationService } from './direct-donation.service';
import { CreateDirectDonationDto } from './dto/create-direct-donation.dto';
import { UpdateDirectDonationDto } from './dto/update-direct-donation.dto';

@Controller('direct-donation')
export class DirectDonationController {
  constructor(private readonly directDonationService: DirectDonationService) {}

  @Post()
  create(@Body() createDirectDonationDto: CreateDirectDonationDto) {
    return this.directDonationService.createDirectDonation(
      createDirectDonationDto,
    );
  }

  @Get('/all')
  listDirectDonation() {
    return this.directDonationService.listDirectDonation();
  }

  @Get(':id/find')
  findOneDirectDonation(@Param('id') id: string) {
    return this.directDonationService.findOneDirectDonation(id);
  }

  @Get('/search-direct-donation')
  async findByLetter(@Query('letter') letter: string) {
    return this.directDonationService.searcDirectDonation(letter);
  }

  @Patch(':id/update-direct-donation')
  updateDonation(
    @Param('id') id: string,
    @Body() updateDirectDonationDto: UpdateDirectDonationDto,
  ) {
    return this.directDonationService.updateDirectDonation(
      id,
      updateDirectDonationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.directDonationService.removeDirectDonation(id);
  }
}
