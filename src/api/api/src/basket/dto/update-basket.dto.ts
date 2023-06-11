import { PartialType } from '@nestjs/mapped-types';
import { CreateBasketDto } from './create-basket.dto';
import { Product } from './product.interface';

export class UpdateBasketDto extends PartialType(CreateBasketDto) {
  id: string;
  name: string;
  products: Product[];
  date: Date;
}
