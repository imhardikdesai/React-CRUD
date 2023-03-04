import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userReducer';

const store = createStore(userReducer, composeWithDevTools(
    applyMiddleware(),
));

export default store;