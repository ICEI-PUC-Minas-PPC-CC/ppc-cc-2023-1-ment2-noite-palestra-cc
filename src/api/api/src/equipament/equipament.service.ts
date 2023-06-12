import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEquipamentDto } from './dto/create-equipament.dto';
import { UpdateEquipamentDto } from './dto/update-equipament.dto';
import { Equipament } from './schemas/equipament.schema';
import { UpdateResult } from 'mongodb';

@Injectable()
export class EquipamentService {
  constructor(
    @InjectModel('Equipament')
    private readonly equipamentModel: Model<Equipament>,
  ) {}

  createEquipament(createEquipamentDto: CreateEquipamentDto) {
    const newEquipament = new this.equipamentModel(createEquipamentDto);
    return newEquipament.save();
  }

  findAllEquipament() {
    const allEquipament = this.equipamentModel.find();
    return allEquipament;
  }

  findOneEquipament(id: string) {
    const equipamentId = this.equipamentModel.findById(id);
    return equipamentId;
  }

  async updateEquipament(
    id: string,
    updateEquipamentDto: UpdateEquipamentDto,
  ): Promise<{ success: boolean }> {
    const { name, lend, lendedAt, lendedTo, phone, address } =
      updateEquipamentDto;

    const updateFields: any = {};

    if (name) {
      updateFields.name = name;
    }
    if (lend) {
      updateFields.lend = lend;
    }
    if (lendedAt) {
      updateFields.lendedAt = lendedAt;
    }
    if (lendedTo) {
      updateFields.lendedTo = lendedTo;
    }
    if (phone) {
      updateFields.phone = phone;
    }
    if (address) {
      updateFields.address = address;
    }

    const result: UpdateResult = await this.equipamentModel
      .updateOne({ _id: id }, { $set: updateFields })

      .exec();

    if (result && result.modifiedCount > 0) {
      return { success: true };
    }
    return { success: false };
  }

  async searchEquipament(letter: string): Promise<Equipament[]> {
    console.log(letter);
    const regex = new RegExp(`^${letter}`, 'i');
    return this.equipamentModel.find({ name: regex }).exec();
  }

  async searchEquipamentCode(code: string): Promise<Equipament[]> {
    const regex = new RegExp(`^${code}`, 'i');
    return this.equipamentModel.find({ code: regex }).exec();
  }

  async removeEquipament(id: string) {
    await this.equipamentModel.deleteOne({ _id: id }).exec();
    return `This action removes a #${id} equipament`;
  }
}
