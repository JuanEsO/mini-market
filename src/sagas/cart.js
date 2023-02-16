import { put, takeEvery } from 'redux-saga/effects';

function* addToCart(action) {
  yield put({ type: 'ADD_TO_CART', payload: action.payload });
}

function* removeFromCart(action) {
  yield put({ type: 'REMOVE_FROM_CART', payload: action.payload });
}

export default function* rootSaga() {
  yield takeEvery('ADD_TO_CART_REQUEST', addToCart);
  yield takeEvery('REMOVE_FROM_CART_REQUEST', removeFromCart);
}