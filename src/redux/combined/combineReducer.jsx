import { combineReducers } from "redux";
// import counterReducer from "../reducer/reducer.jsx";
// import FavouriteReducer from "../reducer/FAV_REDUCER.jsx";
 import changeTheme from "./../reducer/reducer.jsx"
export default combineReducers({
    dark:changeTheme,
})