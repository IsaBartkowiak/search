import { createStore, applyMiddleware } from 'redux';
import { composeEnhancers } from './utils';
import rootReducer from './root-reducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// rehydrate state on app start
const initialState = {};

// create store
const store = createStore(rootReducer, initialState, enhancer);

sagaMiddleware.run(rootSaga);

// export store singleton instance
export default store;
