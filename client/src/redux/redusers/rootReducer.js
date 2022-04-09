import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,

});

export default rootReducer;
