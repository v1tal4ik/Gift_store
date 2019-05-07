import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
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


const isLoading = handleActions({
    [fetchProductRequest]     : ()=> true,
    [fetchOrderRequest]       : ()=> true,
    [fetchFilterOrderRequest] : ()=> true,
    [fetchDeleteOrderRequest] : ()=> true,

    [fetchProductSuccess]     : ()=> false,
    [fetchOrderSuccess]       : ()=> false,
    [fetchFilterOrderSuccess] : ()=> false,
    [fetchDeleteOrderSuccess] : ()=> false,

    [fetchProductFailure]     : ()=> false,
    [fetchOrderFailure]       : ()=> false,
    [fetchFilterOrderFailure] : ()=> false,
    [fetchDeleteOrderFailure] : ()=> false,
},false);

const products = handleActions({
    [fetchProductRequest] : ()=>[],
    [fetchProductSuccess] : (_state,action)=>action.payload,
    [fetchProductFailure] : (_state,action)=>action.payload,
},[])

const order = handleActions({
    [fetchOrderRequest]       : ()=>[],
    [fetchFilterOrderRequest] : ()=>[],
    [fetchDeleteOrderRequest] : ()=>[],

    [fetchOrderSuccess]       : (_state,action)=>action.payload,
    [fetchFilterOrderSuccess] : (_state,action)=>action.payload,
    [fetchDeleteOrderSuccess] : (_state,action)=>action.payload,

    [fetchOrderFailure]       : (_state,action)=>action.payload,
    [fetchFilterOrderFailure] : (_state,action)=>action.payload,
    [fetchDeleteOrderFailure] : (_state,action)=>action.payload,
},[])


export default combineReducers({
    isLoading,
    products,
    order
});

export const getIsLoading=(state)=>state.products.isLoading;
export const getProduct=(state)=>state.products.products;
export const getOrder=(state)=>state.products.order;