import {combineReducers} from 'redux';
import {countryReducer} from './coutrues/reducer';
import {productsReducer} from './searchProducts/reduser';
import {searchParamsReducer} from './searchParams/reducer';

export default combineReducers({
  country: countryReducer,
  products: productsReducer,
  paramsSearch: searchParamsReducer,
});
