import { Injectable } from '@nestjs/common';
import { DirectDonation } from './entities/direct-donation.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDirectDonationDto } from './dto/create-direct-donation.dto';
import { Model } from 'mongoose';
import { UpdateDirectDonationDto } from './dto/update-direct-donation.dto';
import { UpdateResult } from 'mongodb';

@Injectable()
export class DirectDonationService {
  constructor(
    @InjectModel(DirectDonation.name)
    private readonly DirectDonation: Model<DirectDonation>,
  ) {}

  async createDirectDonation(createDirectDonationDto: CreateDirectDonationDto) {
    const {
      nameBeneficiary,
      amountReceive,
      donationName,
      donationId,
      deliveryDate,
    } = createDirectDonationDto;
    const createdDonation = new this.DirectDonation({
      nameBeneficiary,
      amountReceive,
      donationName,
      donationId,
      deliveryDate,
    });
    return createdDonation.save();
  }

  async listDirectDonation() {
    const allDonations = await this.DirectDonation.find();
    return allDonations;
  }

  findOneDirectDonation(id: string) {
    const directDonation = this.DirectDonation.findById({ _id: id });
    return directDonation;
  }

  findOne(id: number) {
    return `This action returns a #${id} directDonation`;
  }

  async updateDirectDonation(
    id: string,
    updateDirectDonationDto: UpdateDirectDonationDto,
  ): Promise<{ success: boolean }> {
    const {
      nameBeneficiary,
      amountReceive,
      donationName,
      donationId,
      deliveryDate,
    } = updateDirectDonationDto;

    const updateFields: any = {};

    updateFields.nameBeneficiary = nameBeneficiary;

    if (amountReceive !== undefined) {
      updateFields.amountReceive = amountReceive;
    } else {
      delete updateFields.amount;
    }

    updateFields.amountReceive = amountReceive;

    updateFields.donationName = donationName;

    updateFields.donationId = donationId;

    updateFields.deliveryDate = deliveryDate;

    const result: UpdateResult = await this.DirectDonation.updateOne(
      { _id: id },
      { $set: updateFields },
    ).exec();

    if (result && result.modifiedCount > 0) {
      return { success: true };
    }
    return { success: false };
  }

  async searcDirectDonation(letter: string): Promise<DirectDonation[]> {
    console.log(letter);
    const regex = new RegExp(`^${letter}`, 'i');
    return this.DirectDonation.find({ nameBeneficiary: regex }).exec();
  }

  async removeDirectDonation(id: string) {
    await this.DirectDonation.deleteOne({ _id: id }).exec();
    return `This action removes a #${id} user`;
  }
}
