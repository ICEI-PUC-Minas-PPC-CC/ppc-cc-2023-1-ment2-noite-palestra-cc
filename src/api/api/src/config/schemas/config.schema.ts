import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ConfigDocument = HydratedDocument<Config>;

@Schema()
export class Config {
  @Prop()
  expirationDays: number;

  @Prop()
  stock: number;
}

export const ConfigSchema = SchemaFactory.createForClass(Config);
