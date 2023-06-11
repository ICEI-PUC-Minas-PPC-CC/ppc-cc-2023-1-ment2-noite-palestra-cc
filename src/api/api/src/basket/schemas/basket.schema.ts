import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from '../dto/product.interface';
import { Document } from 'mongoose';

@Schema()
export class Basket extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: Object }] })
  products: Product[];

  @Prop({ default: Date.now })
  date: Date;
}

export const BasketSchema = SchemaFactory.createForClass(Basket);

BasketSchema.pre('save', function (next) {
  if (!this.date) {
    this.date = new Date();
  }
  next();
});
