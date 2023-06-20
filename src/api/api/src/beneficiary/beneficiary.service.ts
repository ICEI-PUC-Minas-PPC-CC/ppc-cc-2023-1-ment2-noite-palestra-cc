import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';
import { Beneficiary } from './schemas/beneficiary.schema';
import { UpdateResult } from 'mongodb';

@Injectable()
export class BeneficiaryService {
  constructor(
    @InjectModel('Beneficiary')
    private readonly beneficiaryModel: Model<Beneficiary>,
  ) {}

  createBeneficiary(createBeneficiaryDto: CreateBeneficiaryDto) {
    const newBeneficiary = new this.beneficiaryModel(createBeneficiaryDto);
    return newBeneficiary.save();
  }

  findAllBeneficiary() {
    const allBeneficiary = this.beneficiaryModel.find();
    return allBeneficiary;
  }

  findOneBeneficiary(id: string) {
    const beneficiaryId = this.beneficiaryModel.findById(id);
    return beneficiaryId;
  }

  async updateBeneficiary(
    id: string,
    updateBeneficiaryDto: UpdateBeneficiaryDto,
  ): Promise<{ success: boolean }> {
    const { name, age, obs, phone, email, address, receive } =
      updateBeneficiaryDto;

    const updateFields: any = {};

    if (name) {
      updateFields.name = name;
    }
    if (age) {
      updateFields.age = age;
    }
    if (obs) {
      updateFields.obs = obs;
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

    updateFields.receive = receive;

    const result: UpdateResult = await this.beneficiaryModel
      .updateOne({ _id: id }, { $set: updateFields })

      .exec();

    if (result && result.modifiedCount > 0) {
      return { success: true };
    }
    return { success: false };
  }

  async searchBeneficiary(letter: string): Promise<Beneficiary[]> {
    console.log(letter);
    const regex = new RegExp(`^${letter}`, 'i');
    return this.beneficiaryModel.find({ name: regex }).exec();
  }

  async removeBeneficiary(id: string) {
    await this.beneficiaryModel.deleteOne({ _id: id }).exec();
    return `This action removes a #${id} user`;
  }
}
