export class CreateDonationDto {
  name: string;
  amount: number;
  description: string;
  type?: string;
  perishable: boolean;
  entryDate: Date;
  expirationDate: Date;

  constructor() {
    this.perishable = false;
    this.amount = 0;
  }
}
