import {
  call, put, takeEvery, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { FIND_CARDS_SAGA } from '../types/productTypes';
import { findProducts } from '../actions/productsAction';

const { REACT_APP_HOST: host } = process.env;

const getProductsFromServer = async (word) => (await axios.get(`${host}/allProducts/${word}`)).data.data;

function* productWorker(action) {
  yield delay(2000);
  const products = yield call(getProductsFromServer, action.payload);
  // console.log(products);
  yield put(findProducts(products));
}

export default function* productsWatcher() {
  yield takeEvery(FIND_CARDS_SAGA, productWorker);
}
