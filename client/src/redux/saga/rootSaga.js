import { all } from 'redux-saga/effects';
import productsWatcher from './productsSaga';

export default function* rootSaga() {
  yield all([
    productsWatcher(),
  ]);
  // code after all-effect
}

// its like rootReducer in array []
