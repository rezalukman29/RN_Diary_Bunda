import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import authReducer from "./reducers/authReducer";
import rootSaga from "./sagas";
import alertReducer from "./reducers/alertReducer";


const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ 
    auth:  authReducer,
    alert: alertReducer
    
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(
  persistedReducer, 
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);