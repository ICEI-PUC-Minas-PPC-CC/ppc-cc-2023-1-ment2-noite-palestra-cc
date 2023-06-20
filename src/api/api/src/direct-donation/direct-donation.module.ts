import { Module } from '@nestjs/common';
import { DirectDonationService } from './direct-donation.service';
import { DirectDonationController } from './direct-donation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DirectedDonationSchema } from './schema/direct-donation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'DirectDonation', schema: DirectedDonationSchema },
    ]),
  ],
  controllers: [DirectDonationController],
  providers: [DirectDonationService],
})
export class DirectDonationModule {}
