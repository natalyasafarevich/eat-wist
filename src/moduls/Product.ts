type FoodNutrients = {
  number: number,
  name: string,
  amount: number,
  unitName: string,
  derivationCode: string,
  derivationDescription: string

}
export type Product = {
  dataType: string,
  description: string,
  fdcId: number,
  foodNutrients: Array < FoodNutrients >,
  publicationDate: string,
  brandOwner: string,
  gtinUpc: string,
  ndbNumber: number,
  foodCode: string
}
