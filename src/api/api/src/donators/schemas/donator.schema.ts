import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DonatorDocument = HydratedDocument<Donator>;

@Schema()
export class Donator {
  @Prop()
  name: string;

  @Prop()
  cpf: string;

  @Prop()
  phone: string;

  @Prop()
  email?: string;

  @Prop()
  address?: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const DonatorSchema = SchemaFactory.createForClass(Donator);

DonatorSchema.pre('save', function (next) {
  if (!this.createdAt) {
    this.createdAt = new Date();
  }
  next();
});
