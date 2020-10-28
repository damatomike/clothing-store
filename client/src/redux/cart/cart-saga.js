import { all, call, takeLatest, put } from 'redux-saga/effects';
import { clearCart } from './cart-reducer';
import { SIGN_OUT_SUCCESS } from '../user/user-reducer';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

//
export function* clearCartOnCheckOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

//
export function* onCheckOutSuccess() {
  yield put(clearCart());
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onCheckOutSuccess)]);
}
