import { createAction } from 'redux-actions';

export const fetchProductRequest = createAction('PRODUCT/FETCH_REQUEST');
export const fetchProductSuccess = createAction('PRODUCT/FETCH_SUCCESS');
export const fetchProductFailure = createAction('PRODUCT/FETCH_FAILURE');