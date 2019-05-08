import reducer from './reducer';
import { createAction } from 'redux-actions';

describe('date reducer',()=>{
    const state={
        currentDate:'',
     }
    it('changeCurrentDate',()=>{
        const changeCurrentDate = createAction('DATE/CHANGE_DATE');
        const action ={
            type:changeCurrentDate,
            payload:'2019-02-02'
        }
        expect(reducer(state,action)).toEqual({currentDate:'2019-02-02'});
    });
})