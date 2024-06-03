import {  createStore } from 'redux';

import combineReducers from './combined/combineReducer'
// const mystore=createStore(counterReducer)
const mystore=createStore(combineReducers)
export default mystore;

