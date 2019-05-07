import { createAction } from 'redux-actions';

export const fetchProductRequest = createAction('PRODUCT/FETCH_REQUEST');
export const fetchProductSuccess = createAction('PRODUCT/FETCH_SUCCESS');
export const fetchProductFailure = createAction('PRODUCT/FETCH_FAILURE');

export const fetchOrderRequest = createAction('ORDER/FETCH_REQUEST');
export const fetchOrderSuccess = createAction('ORDER/FETCH_SUCCESS');
export const fetchOrderFailure = createAction('ORDER/FETCH_FAILURE');

export const fetchFilterOrderRequest = createAction('ORDER/FETCH_FILTER_REQUEST');
export const fetchFilterOrderSuccess = createAction('ORDER/FETCH_FILTER_SUCCESS');
export const fetchFilterOrderFailure = createAction('ORDER/FETCH_FILTER_FAILURE');

export const fetchDeleteOrderRequest = createAction('ORDER/FETCH_DELETE_REQUEST');
export const fetchDeleteOrderSuccess = createAction('ORDER/FETCH_DELETE_SUCCESS');
export const fetchDeleteOrderFailure = createAction('ORDER/FETCH_DELETE_FAILURE');