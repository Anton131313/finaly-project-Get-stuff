import { SET_AUCTION } from '../types/auctionTypes';

const auctionReducer = (state = null, { type, payload } = {}) => {
  switch (type) {
    case SET_AUCTION:
      return payload;
    default:
      return state;
  }
};

export default auctionReducer;
