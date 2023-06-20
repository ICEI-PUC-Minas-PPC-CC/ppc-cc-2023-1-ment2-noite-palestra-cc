import { PartialType } from '@nestjs/mapped-types';
import { CreateDonatorDto } from './create-donator.dto';

export class UpdateDonatorDto extends PartialType(CreateDonatorDto) {
  id: string;
  name: string;
  obs: string;
  phone: string;
  email?: string;
  address?: string;
}
