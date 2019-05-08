import reducer from './reducer';
import { createAction } from 'redux-actions';

describe('curency reducer',()=>{
    const state={
        currencyCourse:{},
        currencyValue:'1',
        currencySymbol:'€',
        currencyName:'EURO',
     }
    it('fetchCurrencyRequest',()=>{
        const fetchCurrencyRequest = createAction('CURRENCY/FETCH_REQUEST');
        expect(reducer(state,fetchCurrencyRequest)).toEqual(state);
    });

    it('fetchCurrencySuccess',()=>{
        const fetchCurrencySuccess = createAction('CURRENCY/FETCH_SUCCESS');
        const action = {
            type:fetchCurrencySuccess,
            payload:{euro:1,usd:1.5,uah:30}
        }
        expect(reducer(state,action)).toEqual({...state,currencyCourse:{euro:1,usd:1.5,uah:30}});
   });

   it('fetchCurrencyFailure',()=>{
        const fetchCurrencyFailure = createAction('CURRENCY/FETCH_FAILURE');
        const action = {
            type:fetchCurrencyFailure,
            payload:{err:404,msg:'not found'}
        }
        expect(reducer(state,action)).toEqual({...state,currencyCourse:{err:404,msg:'not found'}});
    });

    it('changeCurrencyValue',()=>{
        const changeCurrencyValue = createAction('CURRENCY/CHANGE_VALUE');
        const action = {
            type:changeCurrencyValue,
            payload:5
        }
        expect(reducer(state,action)).toEqual({...state,currencyValue:5});
    });

    it('changeCurrencySymbol',()=>{
        const changeCurrencySymbol = createAction('CURRENCY/CHANGE_SYMBOL');
        const action = {
            type:changeCurrencySymbol,
            payload:'$'
        }
        expect(reducer(state,action)).toEqual({...state,currencySymbol:'$'});
    });

    it('changeCurrencyName',()=>{
        const changeCurrencyName = createAction('CURRENCY/CHANGE_NAME');
        const action = {
            type:changeCurrencyName,
            payload:'UAH'
        }
        expect(reducer(state,action)).toEqual({...state,currencyName:'UAH'});
    });
   
    
})