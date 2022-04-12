import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import getInitState from './initState';
import rootReducer from './redusers/rootReducer';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  getInitState(),
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)),
);

store.subscribe(() => {
  window.localStorage.setItem('redux', JSON.stringify(store.getState()));
});

sagaMiddleware.run(rootSaga);

export default store;
