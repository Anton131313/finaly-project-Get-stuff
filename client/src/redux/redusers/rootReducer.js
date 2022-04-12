import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
import auctionReducer from './auctionReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  auction: auctionReducer,
  search: searchReducer,
});

export default rootReducer;
