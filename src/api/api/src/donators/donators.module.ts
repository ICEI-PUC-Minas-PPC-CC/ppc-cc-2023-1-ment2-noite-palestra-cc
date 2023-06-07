import { Module } from '@nestjs/common';
import { DonatorsService } from './donators.service';
import { DonatorsController } from './donators.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DonatorSchema } from './schemas/donator.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Donator', schema: DonatorSchema }]),
  ],
  controllers: [DonatorsController],
  providers: [DonatorsService],
})
export class DonatorsModule {}
