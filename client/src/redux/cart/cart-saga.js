import { all, call, takeLatest, put } from 'redux-saga/effects';
import { clearCart } from './cart-reducer';
import { SIGN_OUT_SUCCESS } from '../user/user-reducer';
import { CLEAR_CART, CHECKOUT_SUCCESS } from './cart-reducer';

export function* clearCartItems() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartItems);
}

export function* onCheckOutSuccess() {
  yield takeLatest(CHECKOUT_SUCCESS, clearCartItems);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onCheckOutSuccess)]);
}
