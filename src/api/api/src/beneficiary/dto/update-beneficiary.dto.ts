import { PartialType } from '@nestjs/mapped-types';
import { CreateBeneficiaryDto } from './create-beneficiary.dto';

export class UpdateBeneficiaryDto extends PartialType(CreateBeneficiaryDto) {
  id: string;
  name: string;
  age: string;
  cpf: string;
  phone: string;
  email?: string;
  address?: string;
}
