import {combineReducers} from 'redux';
import {countryReducer} from './coutrues/reducer';

export default combineReducers({
  country: countryReducer,
});
