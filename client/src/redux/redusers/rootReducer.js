import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
import auctionReducer, { winnerReducer } from './auctionReducer';
import searchReducer from './searchReducer';
import commentReducer from './commentReducer';
import myAuctionsReducer from './myAuctionsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  auction: auctionReducer,
  search: searchReducer,
  comments: commentReducer,
  winner: winnerReducer,
  myAuctions: myAuctionsReducer,
});

export default rootReducer;
