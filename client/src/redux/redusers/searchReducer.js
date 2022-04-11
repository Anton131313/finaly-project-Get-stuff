import { FIND_CARDS } from '../types/productTypes';

const searchReducer = (state = '', { type, payload } = {}) => {
  switch (type) {
    case FIND_CARDS:
      return payload;
    default:
      return state;
  }
};

export default searchReducer;
