import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './all-redusers';

const middlewareEnhancer = compose(
  applyMiddleware(thunk),
);
export const store = createStore(
  reducers,
  middlewareEnhancer,
);

export type RootState = ReturnType<
  typeof store.getState
>;
export type AppDispatch = typeof store.dispatch;
