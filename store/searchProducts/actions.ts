import searchProducts from '@/app/api/API';
export const SEARCH_PRODUCTS = 'searchProducts/SEARCH_PRODUCTS';
import {Dispatch} from 'redux';
import {DataType} from './type';
import {AppDispatch} from '../store';

export type getProductsT = {
  type: typeof SEARCH_PRODUCTS;
  data: DataType;
};

export type ActionsType = getProductsT;

export const getProducts = (
  value: string,
  page: number,
  sort?: string,
  country?: string,
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await searchProducts(value, page, sort, country);
      const data = await response.data;
      dispatch({type: SEARCH_PRODUCTS, data: data});
    } catch (e: any) {
      console.log(e.message);
    }
  };
};
