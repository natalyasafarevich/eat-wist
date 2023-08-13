import {I} from "../moduls/Generics";
import {FoodNutrients} from "../moduls/types-interfaces/Product";

export const foodFilter = (array1 : Array < FoodNutrients >, array2 : Array < I >) : Array < FoodNutrients > => {
  const filteredDetails = array1.filter((detail) => array2.some((value) => value.id === detail.nutrient.id));
  return filteredDetails
}
