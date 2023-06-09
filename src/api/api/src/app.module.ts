import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DonatorsModule } from './donators/donators.module';
import { BeneficiaryModule } from './beneficiary/beneficiary.module';
import { DonationModule } from './donation/donation.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:1x4VAAEdPJxDPnnw@gaapo-bd.ixn47lw.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
    DonationModule,
    DonatorsModule,
    BeneficiaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
