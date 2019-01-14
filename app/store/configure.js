import { applyMiddleware, compose, createStore as createStoreRedux } from 'redux';
import { persistStore } from 'redux-persist';

import createSagaMiddleware from 'redux-saga';

import ReactotronConfig from 'app/utils/reactotronConfig';
import reducer from './rootReducer';
import rootSaga from './rootSagas';

ReactotronConfig();

export default () => {
  let sagaMiddleware;
  const useReactotron = __DEV__ && process.env.NODE_ENV !== 'test';

  /* eslint no-undef: 0, global-require: 0 */
  if (useReactotron) {
    const sagaMonitor = Reactotron.createSagaMonitor();

    sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  } else {
    sagaMiddleware = createSagaMiddleware();
  }

  const middlewares = [
    sagaMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const createStore = useReactotron ? Reactotron.createStore : createStoreRedux;
  const store = createStore(reducer, compose(...enhancers));

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  // I leave this here in case someone needs to purge the persisted store
  // persistor.purge();

  return { store, persistor };
};