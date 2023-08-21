import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer } from './reducer';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['phoneBook']
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({ reducer: persistedReducer, middleware: getDefaultMiddleware({
  serializableCheck: false,
})} );

export const persistor = persistStore(store);
