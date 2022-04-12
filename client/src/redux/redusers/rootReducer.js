import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
import auctionReducer from './auctionReducer';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  auction: auctionReducer,

});

export default rootReducer;
