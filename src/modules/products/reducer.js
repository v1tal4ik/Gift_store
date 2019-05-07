import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
    fetchProductRequest,
    fetchProductSuccess,
    fetchProductFailure,
    fetchOrderRequest,
    fetchOrderSuccess,
    fetchOrderFailure
    } from './actions';


const isLoading = handleActions({
    [fetchProductRequest] : ()=> true,
    [fetchOrderRequest] : ()=> true,

    [fetchProductSuccess] : ()=> false,
    [fetchOrderSuccess] : ()=> false,

    [fetchProductFailure] : ()=> false,
    [fetchOrderFailure] : ()=> false,
},false);

const products = handleActions({
    [fetchProductRequest] : ()=>[],
    [fetchProductSuccess] : (_state,action)=>action.payload,
    [fetchProductFailure] : (_state,action)=>action.payload,
},[])

const order = handleActions({
    [fetchOrderRequest] : ()=>[],
    [fetchOrderSuccess] : (_state,action)=>action.payload,
    [fetchOrderFailure] : (_state,action)=>action.payload,
},[])


export default combineReducers({
    isLoading,
    products,
    order
});

export const getIsLoading=(state)=>state.products.isLoading;
export const getProduct=(state)=>state.products.products;
export const getOrder=(state)=>state.products.order;