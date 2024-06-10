import {  createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ProductCart } from "./Reducer";
import addToWishList from "../wishliste/Reducer";
import combineReducers from "../compainReducer";

const store=createStore(combineReducers,composeWithDevTools())
export default store;