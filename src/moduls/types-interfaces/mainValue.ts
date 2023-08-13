// 
interface NutrientType {
  id: number,
  number: string,
  name: string,
  rank: number,
  unitName: string
}
interface FoodNutrientSourceType {
  id: number,
  code: string,
  description: string
}
interface FoodNutrientDerivationType {
  id: number,
  code: string,
  description: string,
  foodNutrientSource: FoodNutrientSourceType
}
 
interface DetailIterf {
  sampleUnitId: number,
  purchaseDate: string,
  storeCity: string,
  storeState:string,
  packerCity: string,
  packerState:string
}
interface nutrientAnalysisDetailType {
  subSampleId:number,
  nutrientId: number,
  amount: number,
  labMethodTechnique:string,
  labMethodDescription:string,
  labMethodOriginalDescription:"string",
  labMethodLink:'string'
  nutrientAcquisitionDetails: Array<DetailIterf>
}

export  type D = {
  type: string,
  nutrient: NutrientType,
  foodNutrientDerivation: FoodNutrientDerivationType,
  id: number,
  amount: number,
  dataPoints: number,
  max: number,
  min: number,
  median: number,
  minYearAcquired: number
  nutrientAnalysisDetail:Array<nutrientAnalysisDetailType>

}
