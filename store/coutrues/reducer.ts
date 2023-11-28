import {currentCountry} from '@/store/coutrues/actions';
import {cloneDeep} from 'lodash';
import {ActionsType, COUNTRY, CountryType} from './actions';
import {getSelectedCountry} from '@/localStorageUtils';

let saveCountry = getSelectedCountry();
const defaultState: CountryType = {
  label: saveCountry || 'World',
  isOpen: false,
};

export const countryReducer = (
  state = defaultState,
  action: ActionsType,
): CountryType => {
  switch (action.type) {
    case COUNTRY: {
      const clone = cloneDeep(state);
      clone.isOpen = action.isOpen;
      clone.label = action.label;
      return clone;
    }
    default:
      return state;
  }
};
