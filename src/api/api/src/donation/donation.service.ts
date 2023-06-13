import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Donation, DonationDocument } from './schema/donation.schema';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { UpdateResult } from 'mongodb';
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
    const { name, amount, description, entryDate, expirationDate, perishable } =
      updateDonationDto;

    const updateFields: any = {};

    if (name) {
      updateFields.name = name;
    }
    if (amount) {
      updateFields.amount = amount;
    }
    if (description) {
      updateFields.description = description;
    }
    if (entryDate) {
      updateFields.entryDate = entryDate;
    }
    if (expirationDate) {
      updateFields.adress = expirationDate;
    }
    if (perishable) {
      updateFields.perishable = perishable;
    }

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
}
