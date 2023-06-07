import { Module } from '@nestjs/common';
import { DonatorsService } from './donators.service';
import { DonatorsController } from './donators.controller';

@Module({
  controllers: [DonatorsController],
  providers: [DonatorsService]
})
export class DonatorsModule {}
