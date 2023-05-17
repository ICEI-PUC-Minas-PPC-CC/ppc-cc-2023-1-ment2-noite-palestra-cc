import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type DonationDocument = HydratedDocument<Donation>;

@Schema()
export class Donation {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true, default: 0 })
  amount: number;

  @Prop({ default: false })
  perishable: boolean;

  @Prop({ default: Date.now })
  entryDate: Date;

  @Prop({ required: true })
  expirationDate: Date;
}

export const DonationSchema = SchemaFactory.createForClass(Donation);
