import { FoodNutrients, Product } from "./Product";

export type NutritionDescProps =  {
  info:FoodNutrients
}
export type NutritionProps = FoodProps & {
  calories:number
}
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


export type ParamsType = {
	name:string
}