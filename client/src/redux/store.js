import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redusers/rootReducer';
import rootSaga from './saga/rootSaga';
import initState from './initState';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initState(),
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)),
);

// store.subscribe(() => {
//   window.localStorage.setItem('redux', JSON.stringify(store.getState()));
// });

sagaMiddleware.run(rootSaga);

export default store;
