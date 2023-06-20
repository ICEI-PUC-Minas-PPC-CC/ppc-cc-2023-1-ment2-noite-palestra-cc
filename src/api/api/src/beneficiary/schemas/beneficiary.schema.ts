import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BeneficiaryDocument = HydratedDocument<Beneficiary>;

@Schema()
export class Beneficiary {
  @Prop()
  name: string;

  @Prop()
  age: string;

  @Prop()
  obs: string;

  @Prop()
  phone: string;

  @Prop()
  email?: string;

  @Prop()
  receive: number;

  @Prop()
  address?: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const BeneficiarySchema = SchemaFactory.createForClass(Beneficiary);

BeneficiarySchema.pre('save', function (next) {
  if (!this.createdAt) {
    this.createdAt = new Date();
  }
  next();
});
