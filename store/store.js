import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const middlewareEnhancer = compose(applyMiddleware(thunk));
export const store = createStore(reducer, middlewareEnhancer);
export default store;
