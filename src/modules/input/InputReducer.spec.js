import reducer from './reducer';
import { createAction } from 'redux-actions';

describe('input reducer',()=>{
    const state={
        inputValue:'',
     }
    it('changeInputValue',()=>{
        const changeInputValue = createAction('INPUT/CHANGE_INPUT');
        const action ={
            type:changeInputValue,
            payload:'cup'
        }
        expect(reducer(state,action)).toEqual({inputValue:'cup'});
    });
})