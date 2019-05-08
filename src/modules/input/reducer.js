import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {changeInputValue} from './actions';
import {fetchOrderRequest,fetchProductRequest} from '../products/actions';


const inputValue = handleActions({
    [changeInputValue] : (_state,action)=>action.payload,
    [fetchOrderRequest] : ()=>'',
    [fetchProductRequest] : ()=>'',
},'')



export default combineReducers({
    inputValue
});


export const getInputValue=(state)=>state.input.inputValue;

