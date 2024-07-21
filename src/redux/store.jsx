import {  applyMiddleware, createStore } from 'redux';

import combineReducers from './combined/combineReducer'
import { thunk } from 'redux-thunk';
import rootReducer from './combined/combineReducer';
// const mystore=createStore(counterReducer)
// const mystore=createStore(combineReducers)
const mystore = createStore(rootReducer, applyMiddleware(thunk));

export default mystore;

