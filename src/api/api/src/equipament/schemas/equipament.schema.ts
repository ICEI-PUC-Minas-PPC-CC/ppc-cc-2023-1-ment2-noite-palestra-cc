import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type EquipamentDocument = HydratedDocument<Equipament>;

@Schema()
export class Equipament {
  @Prop()
  code: string;

  @Prop()
  name: string;

  @Prop()
  lend: string;

  @Prop({ default: Date.now })
  lendedAt: Date;

  @Prop()
  lendedTo?: string;

  @Prop()
  phone?: string;

  @Prop()
  address?: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const EquipamentSchema = SchemaFactory.createForClass(Equipament);

EquipamentSchema.pre('save', function (next) {
  if (!this.createdAt) {
    this.createdAt = new Date();
  }
  next();
});
