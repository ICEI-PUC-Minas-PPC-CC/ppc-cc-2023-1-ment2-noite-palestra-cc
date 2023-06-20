import {
  Controller,
  Post,
  Body,
  Query,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BasketService } from './basket.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { CreateDonationDto } from 'src/donation/dto/create-donation.dto';
import { AddToBasketDto } from './dto/add-basket.dto';
import { RemoveProductDto } from './dto/remove.dto';
import { Product } from './dto/product.interface';

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

  @Post('/find-donation')
  async findDonationByName(@Body() CreateDonationDto: CreateDonationDto) {
    const { name } = CreateDonationDto;
    return this.basketService.findDonationByName(name);
  }

  @Patch('update/:id')
  async updateBasket(@Param('id') id: string) {
    const updateResult = await this.basketService.updateBasket(id);

    if (updateResult.success) {
      return { message: 'Basket updated successfully' };
    } else {
      return { message: 'Basket not found' };
    }
  }

  @Get('/list')
  listBaskets() {
    return this.basketService.listBaskets();
  }

  @Post('/add-product')
  async addToTheBasket(@Body() addToBasketDto: AddToBasketDto) {
    const { donationName, quantity } = addToBasketDto;
    await this.basketService.addToTheBasket(donationName, quantity);
  }

  @Get('/find')
  async findBasket(@Query('letter') letter: string) {
    return this.basketService.findBasket(letter);
  }

  @Delete('/remove-product')
  removeFromBasket(@Body() removeProductDto: RemoveProductDto) {
    return this.basketService.removeFromBasket(
      removeProductDto.id,
      removeProductDto.productName,
    );
  }

  @Get('/list-products/:id')
  async listProducts(@Param('id') id: string): Promise<Product[]> {
    return this.basketService.listProducts(id);
  }

  @Delete('/delete/:id')
  deleteBasket(@Param('id') id: string) {
    return this.basketService.deleteBasket(id);
  }
}
