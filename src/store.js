import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { comeposeWithDevTools } from "redux-devtools-extension";
import * as user from "./reducers/userReducers";

const reducer = combineReducers({
  login: user.login,
  register: user.register,
});

const currentUser = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  login: { userInfo: currentUser },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  comeposeWithDevTools(applyMiddleware(...middleware))
);

export default store;
