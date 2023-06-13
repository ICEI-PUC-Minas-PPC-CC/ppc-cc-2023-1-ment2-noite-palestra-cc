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
import { DonationService } from './donation.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';

@Controller('donation')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Post()
  create(@Body() createDonationDto: CreateDonationDto) {
    return this.donationService.createDonation(createDonationDto);
  }

  @Get()
  listDonation() {
    return this.donationService.listDonation();
  }

  @Get(':id/find')
  findOneDonator(@Param('id') id: string) {
    return this.donationService.findOneDonation(id);
  }

  @Get('/search-donation')
  async findByLetter(@Query('letter') letter: string) {
    return this.donationService.searcDoantion(letter);
  }

  @Post('/expiration')
  async findDonationByExpiration(@Body() body: { date: string }) {
    const { date } = body;
    const donation = await this.donationService.findDonationByExpiration(date);
    return donation;
  }

  @Post('/perishable')
  async findByperishable(@Body() body: { perishable: boolean }) {
    const { perishable } = body;
    const donation = await this.donationService.findByperishable(perishable);
    return donation;
  }

  @Post('/entry-date')
  async findDonationByentryDate(@Body() body: { date: string }) {
    const { date } = body;
    const donation = await this.donationService.findDonationByentryDate(date);
    return donation;
  }

  @Patch(':id/update-donation')
  updateDonation(
    @Param('id') id: string,
    @Body() updateDonationDtp: UpdateDonationDto,
  ) {
    return this.donationService.updateDonation(id, updateDonationDtp);
  }

  @Delete(':id')
  removeDonation(@Param('id') id: string) {
    return this.donationService.removeDonation(id);
  }
}
