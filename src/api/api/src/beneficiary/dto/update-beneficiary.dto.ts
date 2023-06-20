import { PartialType } from '@nestjs/mapped-types';
import { CreateBeneficiaryDto } from './create-beneficiary.dto';

export class UpdateBeneficiaryDto extends PartialType(CreateBeneficiaryDto) {
  id: string;
  name: string;
  age: string;
  obs: string;
  phone: string;
  receive: number;
  email?: string;
  address?: string;
}
