import { GET_MY_AUCTIONS } from '../types/auctionTypes';

const myAuctionsReducer = (state = [], { type, payload } = {}) => {
  switch (type) {
    case GET_MY_AUCTIONS:
      return payload;
    default:
      return state;
  }
};
export default myAuctionsReducer;
