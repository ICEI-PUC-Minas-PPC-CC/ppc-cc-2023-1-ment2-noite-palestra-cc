export class CreateEquipamentDto {
  code: string;
  name: string;
  lend: boolean;
  lendedAt?: string;
  lendedTo?: string;
  phone?: string;
  address?: string;
}
