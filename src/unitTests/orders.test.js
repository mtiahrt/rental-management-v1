import React from 'react';
import ReactDOM from 'react-dom';
import Orders from '../Orders';  

describe('Orders', () => {

    // it('testing globle function for the order.js file fails',()=> {
    //     let testResult = Orders.stuff();
    //     const actual = 'stuff ran';
    //     expect(actual).toBe(testResult);
    // })

    it ('static method, works for no items', () => {
        let testOrder = {}
        testOrder.items = []
        const actual = Orders.orderTotalStatic(testOrder)
        expect(actual).toBe(0)
      })

      it ('static, works for one simple item', () => {
        let testOrder = {}
        testOrder.items = []
        testOrder.items.push({"price": 1, "quantity": 2})
        const actual = Orders.orderTotalStatic(testOrder)
        expect(actual).toBe(2)
      })
    
      it ('Non static, works for one simple item', () => {
        let testOrder = {}
        testOrder.items = []
        testOrder.items.push({"price": 1, "quantity": 2})
    
        let orders = new Orders()
        const actual = orders.orderTotal(testOrder)
        expect(actual).toBe(2)
      })
})