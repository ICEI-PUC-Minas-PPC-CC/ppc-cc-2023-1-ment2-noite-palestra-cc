import { Controller, Post, Body } from '@nestjs/common';
import { BasketService } from './basket.service';
import { CreateBasketDto } from './dto/create-basket.dto';

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Post('/create')
  async create(@Body() createBasketDto: CreateBasketDto) {
    const createdBasket = await this.basketService.createBasket(
      createBasketDto,
    );
    return createdBasket;
  }
}

/*
  @Get()
  listDonation() {
    return this.donationService.listDonation();
  }

  @Get('/search-users')
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
  }*/
