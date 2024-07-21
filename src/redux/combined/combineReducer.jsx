// import { combineReducers } from "redux";
// // import counterReducer from "../reducer/reducer.jsx";
// // import FavouriteReducer from "../reducer/FAV_REDUCER.jsx";
// import changeTheme from "./../reducer/reducer.jsx";
// import userReducer from "../reducer/user.jsx";
// import notification from "../reducer/notification.jsx";
// import accessRole from "../reducer/Role.jsx";
// import thunk from 'redux-thunk';

// export default combineReducers({
//   dark: changeTheme,
//   user: userReducer,
//   not: notification,
//   RoleAccess:accessRole
// });

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import changeTheme from '../reducer/reducer.jsx';
import userReducer from '../reducer/user.jsx';
import notification from '../reducer/notification.jsx';
import accessRole from '../reducer/Role.jsx';

const rootReducer = combineReducers({
  dark: changeTheme,
  user: userReducer,
  not: notification,
  RoleAccess: accessRole
});

// const store = createStore(rootReducer, applyMiddleware(thunk));

export default rootReducer;
