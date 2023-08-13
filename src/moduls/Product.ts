type GeneralTypes = {
  fdcId: number,
  description: string,
  publicationDate: string,
  foodClass: string
}

type FoodNutrients = {
  number: number,
  name: string,
  amount: number,
  unitName: string,
  derivationCode: string,
  derivationDescription: string
}
type FoodGroupType = {
  id: number,
  code: string,
  description: string
}
type InputFoodType = GeneralTypes & {
  foodAttributeTypes: Array < any >,
  totalRefuse: number,
  dataType: string,
  foodGroup: FoodGroupType

}

type InputFoodsType = {
  id: string,
  foodDescription: string,
  inputFood: InputFoodType
}
type NutrientFactorsType = {
  id: number,
  proteinValue: number,
  fatValue: number,
  carbohydrateValue: number,
  type: string,
  name: string
}
export type Product = GeneralTypes & {
  foodNutrients: Array < FoodNutrients >,
  dataType: string,
  foodClass: string,
  inputFoods: Array < InputFoodsType >,
  foodComponents: Array < any >,
  foodAttributes: Array < any >,
  nutrientConversionFactors: Array < NutrientFactorsType >,
  ndbNumber: number,
  isHistoricalReference: boolean,
  foodCategory: FoodGroupType
}
