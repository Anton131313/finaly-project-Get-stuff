import { SET_AUCTION } from '../types/auctionTypes';
import { GET_WINNER } from '../types/userTypes';

const auctionReducer = (state = null, { type, payload } = {}) => {
  switch (type) {
    case SET_AUCTION:
      return payload;
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
