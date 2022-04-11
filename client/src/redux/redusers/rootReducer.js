import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  search: searchReducer,

});

export default rootReducer;
