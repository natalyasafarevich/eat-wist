// import {createStore, compose, applyMiddleware} from 'redux';
// import reducers from './reducers';
// import thunk from 'redux-thunk';

// const middlewareEnhancer = compose(applyMiddleware(thunk));
// export const store = createStore(reducers, middlewareEnhancer);
// export default store;
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';
import reduser from './reducers';

const composedEnhancer = compose(applyMiddleware(thunkMiddleware));

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(reduser, composedEnhancer);
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
