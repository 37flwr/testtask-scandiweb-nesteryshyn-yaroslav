import { createStore, applyMiddleware, compose } from 'redux';
import { 
  persistStore, 
  persistReducer } 
from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage,
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { persistor };
export default store;