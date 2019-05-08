import React from 'react';
import OrderItem from './OrderItem';
import {shallow} from 'enzyme';


describe('---> OrderItem',()=>{
    const props = {
        id:1,
        name:'Cup',
        price:5,
        img:'/test',
        date:'2019-01-01',
        currencyValue:5,
        currencySymbol:'$'
    }

    const newOrderItem = shallow(<OrderItem {...props}/>)
    it('correct id',()=>{
        expect(newOrderItem.find('#id').text()).toEqual('1');
    });
    it('correct name',()=>{
        expect(newOrderItem.find('#name').text()).toEqual('Cup');
    });
    it('correct price',()=>{
        expect(newOrderItem.find('#price').text()).toEqual('25 $');
    });
    it('correct date',()=>{
        expect(newOrderItem.find('#date').text()).toEqual('2019-01-01');
    });
})