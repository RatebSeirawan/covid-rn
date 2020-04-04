import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import Thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

import appReducer from './appSlice';
import covidReducer from './covidSlice';
import redditReducer from './redditSlice';

let store;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    app: appReducer,
    covid: covidReducer,
    reddit: redditReducer,
  }),
);

if (__DEV__) {
  const reactotron = require('@Root/config/ReactotronConfig').default;
  const reactotronMiddleware = reactotron.createEnhancer();
  store = createStore(
    persistedReducer,
    compose(applyMiddleware(Thunk), reactotronMiddleware),
  );
} else {
  store = createStore(persistedReducer, compose(applyMiddleware(Thunk)));
}

const persistor = persistStore(store);

export {store, persistor};
