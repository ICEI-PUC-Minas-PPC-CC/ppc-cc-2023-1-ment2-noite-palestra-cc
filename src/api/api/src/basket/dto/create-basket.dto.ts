import { Product } from './product.interface';

export class CreateBasketDto {
  name: string;
  products: Product[];
  date: Date;
}
