import { Module } from '@nestjs/common';
import { EquipamentService } from './equipament.service';
import { EquipamentController } from './equipament.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipamentSchema } from './schemas/equipament.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Equipament', schema: EquipamentSchema },
    ]),
  ],
  controllers: [EquipamentController],
  providers: [EquipamentService],
})
export class EquipamentModule {}
