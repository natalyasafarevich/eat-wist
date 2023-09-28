import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import reducers from './all-redusers';

const middlewareEnhancer = compose(applyMiddleware(thunk))
export const store = createStore(reducers, middlewareEnhancer,);
export default store;

// export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.fList>export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch