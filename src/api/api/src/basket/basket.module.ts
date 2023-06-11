import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { BasketSchema } from './schemas/basket.schema';
import { Donation, DonationSchema } from '../donation/schema/donation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Basket', schema: BasketSchema },
      { name: 'Donation', schema: DonationSchema },
    ]),
  ],
  controllers: [BasketController],
  providers: [BasketService],
})
export class BasketModule {}
