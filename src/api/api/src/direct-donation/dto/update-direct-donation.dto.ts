import { PartialType } from '@nestjs/mapped-types';
import { CreateDirectDonationDto } from './create-direct-donation.dto';

export class UpdateDirectDonationDto extends PartialType(
  CreateDirectDonationDto,
) {}
