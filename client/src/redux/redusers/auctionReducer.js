import { SET_AUCTION, CREATE_PRICE } from '../types/auctionTypes';

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

// import { CREATE_PRICE } from '../types/auctionTypes';

// const priceReducer = (state = null, { type, payload } = {}) => {
//   switch (type) {
//     case CREATE_PRICE:
//       return payload;
//     default:
//       return state;
//   }
// };

// export default priceReducer;
