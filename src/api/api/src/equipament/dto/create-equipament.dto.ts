export class CreateEquipamentDto {
  code: string;
  name: string;
  lend: boolean;
  lendedAt?: Date;
  beneficiary?: string;
  phone?: string;
  address?: string;
}
