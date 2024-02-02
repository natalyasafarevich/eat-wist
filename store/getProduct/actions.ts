import {searchAProduct} from '@/app/api/API';
import {endOfLoading, getIsError, startOfLoading} from '../loading/actions';
import {AppDispatch} from '../store';
import {ProductProps} from './type';

export const GET_PRODUCT = 'getProduct/GET_PRODUCT';

export type getProductProp = {
  type: typeof GET_PRODUCT;
  data: ProductProps;
};

export type ActionsType = getProductProp;

export const getProducts = (value: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      // start of loading
      dispatch(startOfLoading());
      const response = await searchAProduct(value);
      const data = await response.data;
      dispatch({type: GET_PRODUCT, data: data});

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
