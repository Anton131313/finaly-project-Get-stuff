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

// Так отработает без ошибки на state = []

// const productsReducer = (state = [], { type, payload } = {}) => {
//   switch (type) {
//     case ALL_PRODUCTS:
//       return payload;
//     case ADD_PRODUCT:
//       return [payload, ...state];
//     default:
//       return state;
//   }
// };
