import {combineReducers} from 'redux';
import {countryReducer} from './coutrues/reducer';
import {productsReducer} from './searchProducts/reduser';

export default combineReducers({
  country: countryReducer,
  products: productsReducer,
});
