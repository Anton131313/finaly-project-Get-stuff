import {
  call, put, takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import { FIND_CARDS_SAGA } from '../types/productTypes';
import { findProducts } from '../actions/productsAction';

const { REACT_APP_HOST: host } = process.env;

const getProductsFromServer = async (word) => (await axios.get(`${host}/allProducts/${word}`)).data.data;

function* productWorker(action) {
  // console.log(action);
  try {
    
    const products = yield call(getProductsFromServer, action.payload);
    // console.log(products);
    yield put(findProducts(products));
    // console.log(products);
  } catch (error) {
    yield put(findProducts([]));
  }
}


export default function* productsWatcher() {
  yield takeEvery(FIND_CARDS_SAGA, productWorker);
}
