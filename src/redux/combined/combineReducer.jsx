import { combineReducers } from "redux";
// import counterReducer from "../reducer/reducer.jsx";
// import FavouriteReducer from "../reducer/FAV_REDUCER.jsx";
 import changeTheme from "./../reducer/reducer.jsx"
import userReducer from "../reducer/user.jsx";
export default combineReducers({
    dark:changeTheme,
    user: userReducer,

    
})