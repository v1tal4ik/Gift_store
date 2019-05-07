import { takeEvery, put, call, fork } from 'redux-saga/effects';
import {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFailure,
  fetchOrderRequest,
  fetchOrderSuccess,
  fetchOrderFailure,
  } from './actions';
import {getProduct,getALLOrder} from '../../api';


function* fetchProductsWatcher() {
  yield takeEvery(fetchProductRequest, fetchProductFlow);
  yield takeEvery(fetchOrderRequest, fetchOrderFlow);
}

export function* fetchProductFlow(action) {
  try{
    const result = yield call(getProduct,action.payload);
    yield put(fetchProductSuccess(result));
  } catch (error){
    yield put(fetchProductFailure(error));
  }
}

export function* fetchOrderFlow(action) {
  try{
    const result = yield call(getALLOrder,action.payload);
    yield put(fetchOrderSuccess(result));
  } catch (error){
    yield put(fetchOrderFailure(error));
  }
}

export default function*() {
  yield fork(fetchProductsWatcher);
}