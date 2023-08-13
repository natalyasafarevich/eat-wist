import { Product } from "./Product";


export type FoodProps = {
  food: Product;
};

export type DataTypeProps = {
  name: string,
  desc: string
}

// for Header
type LinkProps = {
  url:string,
  name:string
}

export default LinkProps