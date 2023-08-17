export type FoodNutrientsType = {
  amount: number | null,
  derivationCode: string | null,
  derivationDescription: string | null,
  name: string,
  number: string | null,
  unitName: string
}
export type ListType = {
  fdcId: number,
  description: string ,
  brandOwner: string | null,
  dataType: string ,
  foodNutrients: Array < FoodNutrientsType >,
  gtinUpc: string,
  publicationDate: string
}
export type InitialStateProps = {
  list: Array < ListType > | null
}