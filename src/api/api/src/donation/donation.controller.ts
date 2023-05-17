import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DonationService } from './donation.service';
import { CreateDonationDto } from './dto/create-donation.dto';

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
}
