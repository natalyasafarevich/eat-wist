import searchProducts from '@/app/api/API';
export const SEARCH_PRODUCTS = 'searchProducts/SEARCH_PRODUCTS';
import {Dispatch} from 'redux';
import {DataType} from './type';
import {AppDispatch} from '../store';
import {endOfLoading, getIsError, startOfLoading} from '../loading/actions';

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
  additives?: string,
) => {
  return async (dispatch: AppDispatch) => {
    try {
      // start of loading
      dispatch(startOfLoading());
      const response = await searchProducts(
        value,
        page,
        sort,
        country,
        additives,
      );
      const data = await response.data;
      dispatch({type: SEARCH_PRODUCTS, data: data});

      // end of loading
      dispatch(endOfLoading());

      if (data.products.length === 0) {
        dispatch(getIsError('No found'));
      }
    } catch (e: any) {
      dispatch(getIsError(e.message));
    }
  };
};
