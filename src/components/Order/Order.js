import React from 'react'

const Order = () => {

  const hideOrder = () => {
    document.querySelector('.order').classList.add('hide')
  }

  return (
    <div className="order hide">
      <div className="order-card">
        <div className="order-title title">THIS IS YOUR ORDER</div>
        <div className="order-list">
          <div className="element">
            <div className="pizza-name title">Pizza name</div>
            <div className="order-info title">
              <div className="order-time title">13 min</div>
              <div className="order-price title">150 UAH</div>
            </div>
          </div>
          <div className="element">
            <div className="pizza-name title">Pizza name</div>
            <div className="order-info">
              <div className="order-time title">13 min</div>
              <div className="order-price title">150 UAH</div>
            </div>
          </div>
        </div>
        <div className="summary">
          <div className="sum-time title">Wait for 284 min</div>
          <div className="sum-price title">Total price 999 UAH</div>
        </div>
        <div className="order-btns">
          <button onClick={hideOrder} className="ok-btn title">OK</button>
          <button onClick={hideOrder} className="ok-btn title">Close</button>
        </div>
      </div>
    </div>
  );
}
 
export default Order;