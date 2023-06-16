import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type DirectedDonationDocument = HydratedDocument<DirectedDonation>;

@Schema()
export class DirectedDonation {
  @Prop({ required: true })
  nameBeneficiary: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: true, default: 0 })
  amountReceive: number;

  @Prop()
  donationName: string;

  @Prop({ default: Date.now })
  deliveryDate: Date;
}

export const DirectedDonationSchema =
  SchemaFactory.createForClass(DirectedDonation);
