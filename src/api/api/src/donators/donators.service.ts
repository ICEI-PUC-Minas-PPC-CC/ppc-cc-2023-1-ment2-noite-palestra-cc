import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDonatorDto } from './dto/create-donator.dto';
import { UpdateDonatorDto } from './dto/update-donator.dto';
import { Donator } from './schemas/donator.schema';
import { UpdateResult } from 'mongodb';

@Injectable()
export class DonatorsService {
  constructor(
    @InjectModel('Donator')
    private readonly donatorModel: Model<Donator>,
  ) {}

  createDonator(CreateDonatorDto: CreateDonatorDto) {
    const newDonator = new this.donatorModel(CreateDonatorDto);
    return newDonator.save();
  }

  findAllDonators() {
    const allDonators = this.donatorModel.find();
    return allDonators;
  }

  findOneDonator(id: string) {
    const donatorId = this.donatorModel.findById(id);
    return donatorId;
  }

  async updateDonator(
    id: string,
    updateDonatorDto: UpdateDonatorDto,
  ): Promise<{ success: boolean }> {
    const { name, cpf, phone, email, address } = updateDonatorDto;

    const updateFields: any = {};

    if (name) {
      updateFields.name = name;
    }
    if (cpf) {
      updateFields.cpf = cpf;
    }
    if (phone) {
      updateFields.phone = phone;
    }
    if (email) {
      updateFields.email = email;
    }
    if (address) {
      updateFields.address = address;
    }

    const result: UpdateResult = await this.donatorModel
      .updateOne({ _id: id }, { $set: updateFields })

      .exec();

    if (result && result.modifiedCount > 0) {
      return { success: true };
    }
    return { success: false };
  }

  async searchDonators(letter: string): Promise<Donator[]> {
    console.log(letter);
    const regex = new RegExp(`^${letter}`, 'i');
    return this.donatorModel.find({ name: regex }).exec();
  }

  async removeDonator(id: string) {
    await this.donatorModel.deleteOne({ _id: id }).exec();
    return `This action removes a #${id} user`;
  }
}
