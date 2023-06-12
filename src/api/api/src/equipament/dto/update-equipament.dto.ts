import { PartialType } from '@nestjs/mapped-types';
import { CreateEquipamentDto } from './create-equipament.dto';

export class UpdateEquipamentDto extends PartialType(CreateEquipamentDto) {
  id: string;
  name: string;
  lend: boolean;
  lendedAt?: string;
  lendedTo?: string;
  phone?: string;
  address?: string;
}
