import { takeEvery, put, call, fork } from 'redux-saga/effects';
import {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFailure,
  fetchOrderRequest,
  fetchOrderSuccess,
  fetchOrderFailure,
  fetchFilterOrderRequest,
  fetchFilterOrderSuccess,
  fetchFilterOrderFailure,
  fetchDeleteOrderRequest,
  fetchDeleteOrderSuccess,
  fetchDeleteOrderFailure
  } from './actions';
import {getProduct,getALLOrder,getFilterOrder,getDeleteOrder} from '../../api';


function* fetchProductsWatcher() {
  yield takeEvery(fetchProductRequest, fetchProductFlow);
  yield takeEvery(fetchOrderRequest, fetchOrderFlow);
  yield takeEvery(fetchFilterOrderRequest, fetchFilterOrderFlow);
  yield takeEvery(fetchDeleteOrderRequest, fetchDeleteOrderFlow);
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

export function* fetchFilterOrderFlow(action) {
  try{
    const result = yield call(getFilterOrder,action.payload);
    yield put(fetchFilterOrderSuccess(result));
  } catch (error){
    yield put(fetchFilterOrderFailure(error));
  }
}

export function* fetchDeleteOrderFlow(action) {
  try{
    const result = yield call(getDeleteOrder,action.payload);
    yield put(fetchDeleteOrderSuccess(result));
  } catch (error){
    yield put(fetchDeleteOrderFailure(error));
  }
}

export default function*() {
  yield fork(fetchProductsWatcher);
}