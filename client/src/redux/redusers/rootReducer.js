import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
import auctionReducer, { winnerReducer } from './auctionReducer';
import searchReducer from './searchReducer';
import commentReducer from './commentReducer';
import priceReducer from './priceReducer';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  auction: auctionReducer,
  search: searchReducer,
  comments: commentReducer,
  price: priceReducer,
  winner: winnerReducer,
});

export default rootReducer;
