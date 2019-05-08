import reducer from './reducer';
import { createAction } from 'redux-actions';

describe('products reducer',()=>{
    const state={
        isLoading:false,
        products:[],
        order:[],
     }

    it('fetchProductRequest',()=>{
        const fetchProductRequest = createAction('PRODUCT/FETCH_REQUEST');
        expect(reducer(state,fetchProductRequest)).toEqual({...state,isLoading:false});
    });

    it('fetchProductSuccess',()=>{
        const fetchProductSuccess = createAction('PRODUCT/FETCH_SUCCESS');
        const action ={
            type:fetchProductSuccess,
            payload:['cup','hat']
        }
        expect(reducer(state,action)).toEqual({...state,products:['cup','hat']});
    });

    it('fetchProductFailure',()=>{
        const fetchProductFailure = createAction('PRODUCT/FETCH_FAILURE');
        const action ={
            type:fetchProductFailure,
            payload:{err:404,msg:'not found'}
        }
        expect(reducer(state,action)).toEqual({...state,products:{err:404,msg:'not found'}});
    });



    it('fetchOrderRequest',()=>{
        const fetchOrderRequest = createAction('ORDER/FETCH_REQUEST');
        expect(reducer(state,fetchOrderRequest)).toEqual({...state,isLoading:false});
    });

    it('fetchOrderSuccess',()=>{
        const fetchOrderSuccess = createAction('ORDER/FETCH_SUCCESS');
        const action ={
            type:fetchOrderSuccess,
            payload:['hello','ball']
        }
        expect(reducer(state,action)).toEqual({...state,order:['hello','ball']});
    });

    it('fetchOrderFailure',()=>{
        const fetchOrderFailure = createAction('ORDER/FETCH_FAILURE');
        const action ={
            type:fetchOrderFailure,
            payload:{err:404,msg:'not found'}
        }
        expect(reducer(state,action)).toEqual({...state,order:{err:404,msg:'not found'}});
    });



    it('fetchFilterOrderRequest',()=>{
        const fetchFilterOrderRequest = createAction('ORDER/FETCH_FILTER_REQUEST');
        expect(reducer(state,fetchFilterOrderRequest)).toEqual({...state,isLoading:false});
    });

    it('fetchFilterOrderSuccess',()=>{
        const fetchFilterOrderSuccess = createAction('ORDER/FETCH_FILTER_SUCCESS')
        const action ={
            type:fetchFilterOrderSuccess,
            payload:['hello','ball']
        }
        expect(reducer(state,action)).toEqual({...state,order:['hello','ball']});
    });

    it('fetchFilterOrderFailure',()=>{
        const fetchFilterOrderFailure = createAction('ORDER/FETCH_FILTER_FAILURE');
        const action ={
            type:fetchFilterOrderFailure,
            payload:{err:404,msg:'not found'}
        }
        expect(reducer(state,action)).toEqual({...state,order:{err:404,msg:'not found'}});
    });




    it('fetchDeleteOrderRequest',()=>{
        const fetchDeleteOrderRequest = createAction('ORDER/FETCH_DELETE_REQUEST');
        expect(reducer(state,fetchDeleteOrderRequest)).toEqual({...state,isLoading:false});
    });

    it('fetchDeleteOrderSuccess',()=>{
        const fetchDeleteOrderSuccess = createAction('ORDER/FETCH_DELETE_SUCCESS');
        const action ={
            type:fetchDeleteOrderSuccess,
            payload:['hello','ball']
        }
        expect(reducer(state,action)).toEqual({...state,order:['hello','ball']});
    });

    it('fetchDeleteOrderFailure',()=>{
        const fetchDeleteOrderFailure = createAction('ORDER/FETCH_DELETE_FAILURE');
        const action ={
            type:fetchDeleteOrderFailure,
            payload:{err:404,msg:'not found'}
        }
        expect(reducer(state,action)).toEqual({...state,order:{err:404,msg:'not found'}});
    });
   
})