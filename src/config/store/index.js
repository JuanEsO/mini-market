import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@/sagas/cart';
import cartReducer from '@/Reducers/cart';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: cartReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

