import { Module } from '@nestjs/common';
import { BeneficiaryService } from './beneficiary.service';
import { BeneficiaryController } from './beneficiary.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BeneficiarySchema } from './schemas/beneficiary.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Beneficiary', schema: BeneficiarySchema },
    ]),
  ],
  controllers: [BeneficiaryController],
  providers: [BeneficiaryService],
})
export class BeneficiaryModule {}
