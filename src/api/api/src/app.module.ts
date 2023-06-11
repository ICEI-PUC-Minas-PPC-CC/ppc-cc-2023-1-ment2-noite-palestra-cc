import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DonationModule } from './donation/donation.module';
import { BasketModule } from './basket/basket.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:1x4VAAEdPJxDPnnw@gaapo-bd.ixn47lw.mongodb.net/?retryWrites=true&w=majority',
    ),
    DonationModule,
    BasketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
