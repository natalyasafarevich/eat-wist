import {type} from "os";
import {getFood} from "../../API/foodApi";
import {Dispatch} from 'redux';
import {Product} from "../../moduls/Product";

export const SET_PRODUCT = 'trailers/SET_MAIN_PAGE';

// dispatch - this's action/s

export type GetProductProps = {
  type: typeof SET_PRODUCT,
  product:  Product
}
export type ActionsType = GetProductProps;

export const getProduct = (id : string,) => {
  return async (dispatch : Dispatch < ActionsType >)  => {
    try {
      const response = await getFood(id);
      const data = await response.data;
      dispatch({type: SET_PRODUCT, product: data});
    } catch (e) { // Обработка ошибок
    }
  };

}
