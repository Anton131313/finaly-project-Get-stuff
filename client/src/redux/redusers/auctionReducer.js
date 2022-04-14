import { CREATE_PRICE, SET_AUCTION } from '../types/auctionTypes';
import { GET_WINNER } from '../types/userTypes';

const auctionReducer = (state = null, { type, payload } = {}) => {
  switch (type) {
    case SET_AUCTION:
      return payload;
    case CREATE_PRICE:
      return { ...state, 'Bidding.price': payload };
    default:
      return state;
  }
};

export default auctionReducer;
export const winnerReducer = (state = {}, { type, payload } = {}) => {
  switch (type) {
    case GET_WINNER:
      return payload;
    default:
      return state;
  }
};
