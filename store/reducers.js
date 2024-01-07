import {combineReducers} from 'redux';
import {countryReducer} from './coutrues/reducer';
import {productsReducer} from './searchProducts/reduser';
import {searchParamsReducer} from './searchParams/reducer';
import {eventProcessingReducer} from './loading/reduser';

export default combineReducers({
  country: countryReducer,
  products: productsReducer,
  paramsSearch: searchParamsReducer,
  eventsProcessing: eventProcessingReducer,
});
