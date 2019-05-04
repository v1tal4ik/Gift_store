import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {fetchProductRequest,fetchProductSuccess,fetchProductFailure} from './actions';


const isLoading = handleActions({
    [fetchProductRequest] : ()=> true,
    [fetchProductSuccess] : ()=> false,
    [fetchProductFailure] : ()=> false,
},false);

const products = handleActions({
    [fetchProductRequest] : ()=>[],
    [fetchProductSuccess] : (_state,action)=>action.payload,
    [fetchProductFailure] : (_state,action)=>action.payload,
},[])


export default combineReducers({
    isLoading,
    products
});

export const getIsLoading=(state)=>state.products.isLoading;
export const getProduct=(state)=>state.products.products;