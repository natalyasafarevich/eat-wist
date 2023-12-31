import {cloneDeep} from 'lodash';
import {SEARCH_PRODUCTS, ActionsType} from './actions';
import {DataProduct} from './type';

const initialState: DataProduct = {
  data: {
    count: 0,
    page: 0,
    page_count: 0,
    page_size: 0,
    products: [
      {
        brands: '',
        code: '',
        image_url: '',
        product_name: '',
        nutrition_grades: '',
        // ecoscore_score: '',
        nutriments: {
          ['energy-kcal']: '0',
        },
      },
    ],
  },
};

export const productsReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case SEARCH_PRODUCTS: {
      const clone = cloneDeep(state);
      clone.data = action.data;
      return clone;
    }
    default:
      return state;
  }
};
