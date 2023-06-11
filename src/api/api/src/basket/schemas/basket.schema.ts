import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from '../dto/product.interface';

export type BasketDocument = HydratedDocument<Basket>;

@Schema()
export class Basket {
  @Prop({ required: true })
  name: string;

  @Prop([{ type: Object }])
  products: Product[];

  @Prop({ default: Date.now })
  date: Date;
}

export const BasketSchema = SchemaFactory.createForClass(Basket);
