import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import khoaHocReducer from "../Redux/Reducers/khoaHoc";
import userReducer from "../Redux/Reducers/user";

const rootReducer = combineReducers({
  // Quản lý reducers
  khoaHoc: khoaHocReducer,
  user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
