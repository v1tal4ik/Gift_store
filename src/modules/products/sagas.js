import { takeEvery, put, call, fork } from 'redux-saga/effects';
import {fetchProductRequest,fetchProductSuccess,fetchProductFailure} from './actions';
import {getProduct} from '../../api';


function* fetchFollowersWatcher() {
  yield takeEvery(fetchProductRequest, fetchProductFlow);
}

export function* fetchProductFlow(action) {
  try{
    const result = yield call(getProduct,action.payload);
    yield put(fetchProductSuccess(result));
  } catch (error){
    yield put(fetchProductFailure(error));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}