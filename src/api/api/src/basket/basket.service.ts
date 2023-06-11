import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Basket } from './schemas/basket.schema';
import { Donation } from '../donation/schema/donation.schema'; // Import the Donation model
import { UpdateBasketDto } from './dto/update-basket.dto';
import { Product } from './dto/product.interface'; // Import the Product interface

@Injectable()
export class BasketService {
  constructor(
    @InjectModel(Basket.name)
    private readonly basketModel: Model<Basket>,
    @InjectModel(Donation.name) // Inject the Donation model
    private readonly donationModel: Model<Donation>,
  ) {}

  async createBasket(createBasketDto: CreateBasketDto) {
    const { name, products, date } = createBasketDto;

    // Retrieve the donation information from the database and store it in the basket
    const basketProducts: Product[] = [];
    for (const product of products) {
      const donationData = await this.searchDonation(product.name);
      console.log('Donation Data:', donationData); // Add this console.log statement
      if (donationData.length > 0) {
        const basketProduct: Product = {
          name: donationData[0].name,
          quantity: product.quantity,
        };
        basketProducts.push(basketProduct);
      }
    }

    // Create the basket document
    const basket = new this.basketModel({
      name,
      products: basketProducts,
      date,
    });

    // Save the basket to the database
    const createdBasket = await basket.save();

    return createdBasket;
  }

  async searchDonation(letter: string): Promise<Donation[]> {
    const regex = new RegExp(`^${letter}`, 'i');
    return this.donationModel.find({ name: regex }).exec();
  }
}
