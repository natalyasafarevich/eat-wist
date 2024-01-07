import {ActionsType, ERROR, START_LOADING, END_LOADING} from './actions';

type defaultStateProps = {
  isLoading: Boolean;
  isError: Boolean;
  message: string;
};

const defaultState: defaultStateProps = {
  isLoading: false,
  isError: false,
  message: '',
};

export const eventProcessingReducer = (
  state = defaultState,
  action: ActionsType,
): defaultStateProps => {
  switch (action.type) {
    case START_LOADING: {
      const clone = structuredClone(state);
      clone.isLoading = true;
      clone.isError = false;
      return clone;
    }
    case END_LOADING: {
      const clone = structuredClone(state);
      clone.isLoading = false;
      clone.isError = false;
      return clone;
    }
    case ERROR: {
      const clone = structuredClone(state);
      clone.isLoading = false;
      clone.isError = true;
      clone.message = action.data_error;
      return clone;
    }
    default:
      return state;
  }
};
