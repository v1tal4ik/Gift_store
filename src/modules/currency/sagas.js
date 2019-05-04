import { takeEvery, put, call, fork } from 'redux-saga/effects';
import {fetchCurrencyRequest,fetchCurrencySuccess,fetchCurrencyFailure} from './actions';
import {getCourse} from '../../api';


function* fetchCurrencyWatcher() {
  yield takeEvery(fetchCurrencyRequest, fetchCourseFlow);
}

export function* fetchCourseFlow(action) {
  try{
    const result = yield call(getCourse,action.payload);
    yield put(fetchCurrencySuccess(result));
  } catch (error){
    yield put(fetchCurrencyFailure(error));
  }
}

export default function*() {
  yield fork(fetchCurrencyWatcher);
}