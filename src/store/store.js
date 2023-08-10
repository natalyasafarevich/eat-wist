import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers';

const middlewareEnhancer = compose(applyMiddleware(thunk))
export const store = createStore(reducers, middlewareEnhancer,);
export default store;
