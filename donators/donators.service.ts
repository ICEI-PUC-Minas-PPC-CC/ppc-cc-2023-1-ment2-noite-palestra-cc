import { Injectable } from '@nestjs/common';
import { CreateDonatorDto } from './dto/create-donator.dto';
import { UpdateDonatorDto } from './dto/update-donator.dto';

@Injectable()
export class DonatorsService {
  create(createDonatorDto: CreateDonatorDto) {
    return 'This action adds a new donator';
  }

  findAll() {
    return `This action returns all donators`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donator`;
  }

  update(id: number, updateDonatorDto: UpdateDonatorDto) {
    return `This action updates a #${id} donator`;
  }

  remove(id: number) {
    return `This action removes a #${id} donator`;
  }
}
