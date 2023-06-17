import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigSchema } from './schemas/config.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Config', schema: ConfigSchema }]),
  ],
  controllers: [ConfigController],
  providers: [ConfigService],
})
export class ConfigModule {}
