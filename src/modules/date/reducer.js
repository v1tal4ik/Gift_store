import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {changeCurrentDate} from './actions';


const currentDate = handleActions({
    [changeCurrentDate] : (_state,action)=>action.payload,
},'2019-01-01')



export default combineReducers({
    currentDate
});


export const getCurrentDate=(state)=>state.date.currentDate;

