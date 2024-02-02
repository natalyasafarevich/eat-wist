import {cloneDeep} from 'lodash';
import {GET_PRODUCT, ActionsType} from './actions';
import {ProductProps} from './type';

const initialState: ProductProps = {
  data: {
    product: {
      product_name: '',
      stores: '',
      additives_old_tags: [],
      categories: ' ',
      countries: '',
      image_url: '',
      ingredients_analysis_tags: [],
      manufacturing_places: '',
      nutriments: {
        carbohydrates: 0,
        carbohydrates_unit: '',
        'energy-kj': 0,
        'energy-kj_unit': '',
        'energy-kcal': 0,
        'energy-kcal_unit': '',
        fat: 0,
        fat_unit: '',
        'fruits-vegetables-legumes-estimate-from-ingredients_100g': 0,
        'nova-group': 0,
        salt: 0,
        salt_unit: '',
        sugars: 0,
        sugars_unit: '',
      },
      nutrition_grades: '',
      packagings: [
        {
          material: '',
          quantity_per_unit: '',
        },
      ],
    },
  },
};

export const productsReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case GET_PRODUCT: {
      const clone = cloneDeep(state);
      clone.data = action.data;
      return clone;
    }
    default:
      return state;
  }
};
