import { createAction } from 'redux-actions';

export const fetchCurrencyRequest = createAction('CURRENCY/FETCH_REQUEST');
export const fetchCurrencySuccess = createAction('CURRENCY/FETCH_SUCCESS');
export const fetchCurrencyFailure = createAction('CURRENCY/FETCH_FAILURE');

export const changeCurrencyValue = createAction('CURRENCY/CHANGE_VALUE');
export const changeCurrencySymbol = createAction('CURRENCY/CHANGE_SYMBOL');