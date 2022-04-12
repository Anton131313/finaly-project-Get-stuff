import { CREATE_COMMENTS, SET_COMMENTS } from '../types/auctionTypes';

const commentReducer = (state = null, { type, payload } = {}) => {
  switch (type) {
    case SET_COMMENTS:
      return payload;
    case CREATE_COMMENTS:
      return [...state, payload];
    default:
      return state;
  }
};

export default commentReducer;
