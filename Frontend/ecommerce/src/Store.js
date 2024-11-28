import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import { productsDetailsReducers, productsListReducers } from "./reducers/productsReducers";
import { userLoginReducers, userSignupReducers } from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";

const reducers = combineReducers({
  productsList: productsListReducers,
  productDetails:productsDetailsReducers,
  userLogin:userLoginReducers,
  userSignup:userSignupReducers,
  cart:cartReducer,
});


const cartItemsFromStorage=localStorage.getItem('cartItems')?
JSON.parse(localStorage.getItem('cartItems')):[]

const initialState = {
  cart:{cartItems:cartItemsFromStorage}
};
const middleware = [thunk];

const composeEnhancers =
  process.env.NODE_ENV === 'development' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? composeWithDevTools
    : compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
