/* eslint-disable default-case */
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FALILUR,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FALILUR,
} from "../constants/productConstants";

export const productsListReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_LIST_FALILUR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productsDetailsReducers = (state = { product: [] }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_DETAILS_FALILUR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
