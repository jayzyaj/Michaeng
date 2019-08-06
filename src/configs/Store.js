// Redux modules
import { createStore, applyMiddleware } from 'redux';

// Redux persist
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

// Redux Middlewares
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Reducers and Saga modules
import RootReducer from '../reducer';
import RootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  process.env.NODE_ENV !== 'production' && logger,
].filter(Boolean);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const reducer = persistReducer(persistConfig, RootReducer);
const store = createStoreWithMiddleware(reducer);
const persistor = persistStore(store);

sagaMiddleware.run(RootSaga);

export default () => ({
  store,
  persistor,
});
