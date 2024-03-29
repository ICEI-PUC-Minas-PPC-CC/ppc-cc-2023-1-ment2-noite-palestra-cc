import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Donation, DonationDocument } from './schema/donation.schema';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { MongoClient, UpdateResult } from 'mongodb';
@Injectable()
export class DonationService {
  constructor(
    @InjectModel(Donation.name)
    private readonly donationModel: Model<DonationDocument>,
  ) {}

  async createDonation(createDonationDto: CreateDonationDto) {
    const {
      name,
      amount,
      type,
      description,
      perishable,
      entryDate,
      expirationDate,
    } = createDonationDto;
    const createdDonation = new this.donationModel({
      name,
      amount,
      type,
      description,
      perishable,
      entryDate,
      expirationDate,
    });
    return createdDonation.save();
  }

  async listDonation() {
    const allDonations = await this.donationModel.find();
    return allDonations;
  }

  findOneDonation(id: string) {
    const donatorId = this.donationModel.findById(id);
    return donatorId;
  }

  async findDonationByType(type: string) {
    const donation = await this.donationModel.find({ type: type });
    return donation;
  }

  async findExpiringProducts(days: number) {
    const currentDate = new Date();
    const expirationDate = new Date();
    expirationDate.setTime(currentDate.getTime() + days * 24 * 60 * 60 * 1000);

    const productCount = await this.donationModel.countDocuments({
      expirationDate: { $gte: currentDate, $lte: expirationDate },
    });

    return { count: productCount };
  }

  async findDonationByExpiration(date: string) {
    const expirationDate = new Date(date);
    console.log(expirationDate);
    const donation = await this.donationModel.find({
      expirationDate: expirationDate,
    });
    return donation;
  }

  async findDonationByentryDate(date: string) {
    const entryDate = new Date(date);
    const donation = await this.donationModel.find({
      entryDate: entryDate,
    });
    return donation;
  }

  async updateDonation(
    id: string,
    updateDonationDto: UpdateDonationDto,
  ): Promise<{ success: boolean }> {
    const {
      name,
      amount,
      description,
      entryDate,
      expirationDate,
      perishable,
      directedFor,
    } = updateDonationDto;

    const updateFields: any = {};

    if (name) {
      updateFields.name = name;
    }
    if (amount !== undefined) {
      updateFields.amount = amount;
    } else {
      delete updateFields.amount;
    }
    if (description) {
      updateFields.description = description;
    }
    if (entryDate) {
      updateFields.entryDate = entryDate;
    }
    if (expirationDate) {
      updateFields.expirationDate = expirationDate;
    }

    updateFields.perishable = perishable;
    updateFields.directedFor = directedFor;

    const result: UpdateResult = await this.donationModel
      .updateOne({ _id: id }, { $set: updateFields })
      .exec();

    if (result && result.modifiedCount > 0) {
      return { success: true };
    }
    return { success: false };
  }

  async findByperishable(perishable: boolean) {
    const donation = await this.donationModel.find({ perishable: perishable });
    return donation;
  }

  async searcDoantion(letter: string): Promise<Donation[]> {
    console.log(letter);
    const regex = new RegExp(`^${letter}`, 'i');
    return this.donationModel.find({ name: regex }).exec();
  }

  async removeDonation(id: string) {
    await this.donationModel.deleteOne({ _id: id }).exec();
    return `This action removes a #${id} user`;
  }

  async obterSomaQuantidades(): Promise<number> {
    const uri =
      'mongodb+srv://admin:1x4VAAEdPJxDPnnw@gaapo-bd.ixn47lw.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const database = client.db('test');
      const collection = database.collection('donations');
      const pipeline = [
        {
          $group: {
            _id: null,
            total: { $sum: '$amount' },
          },
        },
      ];

      const result = await collection.aggregate(pipeline).toArray();

      if (result.length > 0) {
        return result[0].total;
      }

      return 0;
    } finally {
      await client.close();
    }
  }

  async findExpiringDonation(days: number) {
    const currentDate = new Date();
    const expirationDate = new Date();

    expirationDate.setTime(currentDate.getTime() + days * 24 * 60 * 60 * 1000);
    console.log(expirationDate);

    const products = await this.donationModel.find({
      expirationDate: { $gte: currentDate, $lte: expirationDate },
    });

    return products;
  }

  async deliveryDonation(id: string, qtd: number): Promise<Donation> {
    const donation = await this.donationModel.findById(id);
    console.log('don', donation);
    if (!donation) {
      throw new BadRequestException('Invalid donation ID');
    }

    const updatedAmount = donation.amount - qtd;

    if (updatedAmount < 0) {
      throw new BadRequestException('Insufficient amount');
    }

    donation.amount = updatedAmount;

    return donation.save();
  }

  async isStockBelowMinimum(estoqueMinimo: number): Promise<boolean> {
    const products = await this.donationModel.find();
    const totalAmount = products.reduce(
      (sum, product) => sum + product.amount,
      0,
    );

    return estoqueMinimo < totalAmount;
  }
}
