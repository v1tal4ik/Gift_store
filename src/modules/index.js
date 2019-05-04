import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import products, { sagas as productsSagas } from './products';
import currency, { sagas as currencySagas } from './currency';
import date from './date';
import input from './input';

export default combineReducers({currency,products,date,input});

export function* rootSaga() {
    yield fork(productsSagas);
    yield fork(currencySagas);
}