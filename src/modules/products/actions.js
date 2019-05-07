import { createAction } from 'redux-actions';

export const fetchProductRequest = createAction('PRODUCT/FETCH_REQUEST');
export const fetchProductSuccess = createAction('PRODUCT/FETCH_SUCCESS');
export const fetchProductFailure = createAction('PRODUCT/FETCH_FAILURE');

export const fetchOrderRequest = createAction('ORDER/FETCH_REQUEST');
export const fetchOrderSuccess = createAction('ORDER/FETCH_SUCCESS');
export const fetchOrderFailure = createAction('ORDER/FETCH_FAILURE');