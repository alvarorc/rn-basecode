import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/es/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

// auth persist
const authPersist = {
  key: 'auth',
  storage,
};


const basicReducer = (state = {}, action) => {
  return state;
};

// app reducers
const rootReducers = combineReducers({
  base: basicReducer
});

export default persistReducer(persistConfig, rootReducers);