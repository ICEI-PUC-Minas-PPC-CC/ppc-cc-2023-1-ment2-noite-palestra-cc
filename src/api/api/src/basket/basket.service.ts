import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Basket } from './schemas/basket.schema';
import { Donation } from '../donation/schema/donation.schema';
import { Product } from './dto/product.interface';

@Injectable()
export class BasketService {
  private basketProducts: Product[] = [];

  constructor(
    @InjectModel(Basket.name)
    private readonly basketModel: Model<Basket>,
    @InjectModel(Donation.name)
    private readonly donationModel: Model<Donation>,
  ) {}

  async createBasket(createBasketDto: CreateBasketDto) {
    const { name } = createBasketDto;

    const basket = new this.basketModel({
      name,
      products: [],
    });

    const createdBasket = await basket.save();

    return createdBasket;
  }

  async updateBasket(id: string): Promise<{ success: boolean }> {
    const basket = await this.basketModel.findById(id);

    if (!basket) {
      return { success: false };
    }

    basket.products.push(...this.basketProducts);
    this.basketProducts = []; // Clear the basketProducts array

    await basket.save();

    console.log('Updated basket products:', basket.products);

    return { success: true };
  }

  async findDonationByName(name: string): Promise<Donation | null> {
    const donation = await this.donationModel.findOne({ name }).exec();
    return donation;
  }

  async addToTheBasket(donationName: string, quantity: number): Promise<void> {
    const donation = await this.findDonationByName(donationName);

    if (donation) {
      const basketProduct: Product = {
        name: donation.name,
        quantity,
      };

      this.basketProducts.push(basketProduct);
      console.log(
        `Added '${donation.name}' to the basket with quantity: ${quantity}`,
      );
      console.log('Basket Products:', this.basketProducts);
    } else {
      console.log(`Donation '${donationName}' not found.`);
    }
  }

  async removeFromBasket(
    basketId: string,
    productName: string,
  ): Promise<{ success: boolean }> {
    const basket = await this.basketModel.findById(basketId);

    if (!basket) {
      return { success: false };
    }

    const index = basket.products.findIndex(
      (product) => product.name === productName,
    );

    if (index !== -1) {
      basket.products.splice(index, 1);
      await basket.save();
      console.log(`Removed '${productName}' from the basket.`);
      return { success: true };
    } else {
      console.log(`Product '${productName}' not found in the basket.`);
      return { success: false };
    }
  }

  async findBasket(letter: string): Promise<Basket[]> {
    console.log(letter);
    const regex = new RegExp(`^${letter}`, 'i');
    return this.basketModel.find({ name: regex }).exec();
  }

  async listProducts(id: string): Promise<Product[]> {
    const basket = await this.basketModel.findById(id);

    if (!basket) {
      throw new NotFoundException('Basket not found');
    }

    return basket.products;
  }

  async deleteBasket(id: string) {
    await this.basketModel.deleteOne({ _id: id }).exec();
    return `This action removes a #${id} basket`;
  }
}
