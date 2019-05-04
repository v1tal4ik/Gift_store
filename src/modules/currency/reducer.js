import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
    fetchCurrencyRequest,
    fetchCurrencySuccess,
    fetchCurrencyFailure,
    changeCurrencyValue,
    changeCurrencySymbol
} from './actions';


const currencyCourse = handleActions({
    [fetchCurrencyRequest] : ()=>[],
    [fetchCurrencySuccess] : (_state,action)=>action.payload,
    [fetchCurrencyFailure] : (_state,action)=>action.payload,
},{})

const currencyValue = handleActions({
    [changeCurrencyValue] : (_state,action)=>action.payload
},1)

const currencySymbol = handleActions({
    [changeCurrencySymbol] : (_state,action)=>action.payload
},'€')

export default combineReducers({
    currencyValue,
    currencySymbol,
    currencyCourse
});


export const getValue=(state)=>state.currency.currencyValue;
export const getSymbol=(state)=>state.currency.currencySymbol;

export const getEuro=(state)=>state.currency.currencyCourse.EUR;
export const getUSD=(state)=>state.currency.currencyCourse.USD;
export const getUA=(state)=>state.currency.currencyCourse.UAH;
