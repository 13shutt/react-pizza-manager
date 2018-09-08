import React, { Component } from 'react'

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="order">
        <div className="order-card">
          <div className="order-title">This is your order</div>
          <div className="order-list">
            <div className="element">
              <div className="pizza-name">Pizza name</div>
              <div className="order-info">
                <div className="order-time">13 min</div>
                <div className="order-price">150 UAH</div>
              </div>
            </div>
          </div>
          <div className="summary">
            <div className="sum-time">284 min</div>
            <div className="sum-price">999 UAH</div>
          </div>
          <div className="order-btns">
            <button>OK</button>
            <button>Close</button>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Order;