import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Donation, DonationDocument } from './schema/donation.schema';

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
}
