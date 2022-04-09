import { ALL_PRODUCTS, ADD_PRODUCT } from '../types/productTypes';

const productsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_PRODUCTS:
      return payload;
    case ADD_PRODUCT:
      return [payload, ...state];
    default:
      return state;
  }
};

export default productsReducer;
