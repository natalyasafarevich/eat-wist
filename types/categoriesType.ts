import { FoodNutrients, GeneralTypes } from "./Product"

export type FoodsType = GeneralTypes & {
  commonNames: string,
  additionalDescriptions: string,
  dataType: string,
  ndbNumber:number,
  foodCategory: string,
  allHighlightFields:string,
  score:number,
  microbes: Array <any>,
  foodNutrients:FoodNutrients
}

export type CategoriesType = {
  totalHits: number,
  currentPage: number,
  totalPages:number,
  pageList: Array<number>,
  foods: Array<FoodsType>
}
export type CategoriesInitialStateProps = {
  list:CategoriesType| null
}