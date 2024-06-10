import addToWishList from "./wishliste/Reducer";
import { ProductCart } from "./Cart/Reducer";
import { combineReducers } from "redux";
export default combineReducers({
    cartR:ProductCart,
    favR:addToWishList
})
