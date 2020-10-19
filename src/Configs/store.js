import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import khoaHocReducer from "../Redux/Reducers/khoaHoc";

const rootReducer = combineReducers({
  // Quản lý reducers
  khoaHoc: khoaHocReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
