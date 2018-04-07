import React, { Component } from 'react';

function stuff() {
  return 'stuff ran';
};

class Orders extends Component {

  static orderTotalStatic (order){
    return order.items.reduce((prev, cur) =>
      cur.price * (cur.quantity || 1) + prev, 0)
  }

  orderTotal (order){
    return order.items.reduce((prev, cur) =>
      cur.price * (cur.quantity || 1) + prev, 0)
  }

}
export default Orders;