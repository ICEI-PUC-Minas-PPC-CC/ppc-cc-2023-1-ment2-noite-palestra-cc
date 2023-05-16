import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controller';
import { DonationSchema } from './schema/donation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Donation', schema: DonationSchema }]),
  ],
  controllers: [DonationController],
  providers: [DonationService],
})
export class DonationModule {}
