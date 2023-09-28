import { ListType } from "../foods-list/modules"

type FoodSearchCriteriaT = {
  query:string,
  pageNumber:number,
  sortBy:string,
  sortOrder:string
}

export type ListT = {
  foods: Array < ListType >,
  foodSearchCriteria:FoodSearchCriteriaT,
  pageList:Array<number>
}
export type InitialStateProps = {
  list: ListT
}