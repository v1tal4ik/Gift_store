import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {changeInputValue} from './actions';


const inputValue = handleActions({
    [changeInputValue] : (_state,action)=>action.payload,
},'')



export default combineReducers({
    inputValue
});


export const getInputValue=(state)=>state.input.inputValue;

