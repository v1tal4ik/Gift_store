import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
    fetchCurrencyRequest,
    fetchCurrencySuccess,
    fetchCurrencyFailure,
    changeCurrencyValue,
    changeCurrencySymbol,
    changeCurrencyName
} from './actions';


const currencyCourse = handleActions({
    [fetchCurrencyRequest] : ()=>{},
    [fetchCurrencySuccess] : (_state,action)=>action.payload,
    [fetchCurrencyFailure] : (_state,action)=>action.payload,
},{})

const currencyValue = handleActions({
    [changeCurrencyValue] : (_state,action)=>action.payload
},1)

const currencySymbol = handleActions({
    [changeCurrencySymbol] : (_state,action)=>action.payload
},'€')

const currencyName = handleActions({
    [changeCurrencyName] : (_state,action)=>action.payload
},'EURO')

export default combineReducers({
    currencyName,
    currencyValue,
    currencySymbol,
    currencyCourse
});


export const getValue=(state)=>state.currency.currencyValue;
export const getSymbol=(state)=>state.currency.currencySymbol;
export const getName=(state)=>state.currency.currencyName;

export const getEuro=(state)=>state.currency.currencyCourse.EUR;
export const getUSD=(state)=>state.currency.currencyCourse.USD;
export const getUA=(state)=>state.currency.currencyCourse.UAH;
