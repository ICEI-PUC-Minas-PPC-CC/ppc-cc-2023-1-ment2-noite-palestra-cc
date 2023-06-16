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

  @Get('/sum-quantities')
  async obterSomaQuantidades() {
    const somaQuantidades = await this.donationService.obterSomaQuantidades();
    return { soma: somaQuantidades };
  }

  @Post('/expiring-donations')
  async findExpiringDonation(@Body('days') days: number) {
    const products = await this.donationService.findExpiringDonation(days);
    return products;
  }

  @Get(':id/find')
  findOneDonator(@Param('id') id: string) {
    return this.donationService.findOneDonation(id);
  }

  @Post('/expiring-products')
  async findExpiringProducts(@Body('days') days: number) {
    const products = await this.donationService.findExpiringProducts(days);
    return products;
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

  @Patch(':id/update-donation-amount')
  updateDonationAmount(@Param('id') id: string, @Body() amountReceive: number) {
    return this.donationService.deliveryDonation(id, amountReceive);
  }

  @Delete(':id')
  removeDonation(@Param('id') id: string) {
    return this.donationService.removeDonation(id);
  }
}
