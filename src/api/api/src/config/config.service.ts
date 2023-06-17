import { Injectable } from '@nestjs/common';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import { Config, ConfigDocument } from './schemas/config.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateResult } from 'mongodb';

@Injectable()
export class ConfigService {
  constructor(
    @InjectModel(Config.name)
    private readonly ConfigModel: Model<ConfigDocument>,
  ) {}

  async create(createConfigDto: CreateConfigDto) {
    const { expirationDays, stock } = createConfigDto;
    const createdConfig = new this.ConfigModel({
      expirationDays,
      stock,
    });
    return createdConfig.save();
  }

  async findAllConfig() {
    const allConfigs = await this.ConfigModel.find();
    return allConfigs;
  }

  async updateConfig(
    id: string,
    updateConfigDto: UpdateConfigDto,
  ): Promise<{ success: boolean }> {
    const { expirationDays, stock } = updateConfigDto;

    const updateFields: any = {};

    if (expirationDays) {
      updateFields.expirationDays = expirationDays;
    }
    if (stock) {
      updateFields.stock = stock;
    }

    const result: UpdateResult = await this.ConfigModel.updateOne(
      { _id: id },
      { $set: updateFields },
    ).exec();

    if (result && result.modifiedCount > 0) {
      return { success: true };
    }
    return { success: false };
  }
}
