import React, { Component } from 'react'
import { connect } from 'react-redux'

class Order extends Component {
  
  hideOrder = () => {
    document.querySelector('.order').classList.add('hide')
  }

  countTime = () => {
    return this.props.currentStore.reduce((sum, item) => {
      return sum + +item.time
    }, 0)
  }

  countPrice = () => {
    return this.props.currentStore.reduce((sum, item) => {
      return sum + +item.price
    }, 0)
  }

  render() {
    console.log(this.props.currentStore)
    return (
      <div className="order hide">
        <div className="order-card">
          <div className="order-title title">THIS IS YOUR ORDER</div>
          <div className="order-list">
            {this.props.currentStore.map((item, index) => (
              <div className="element" key={index}>
                <div className="pizza-name title">{item.title}</div>
                <div className="order-info title">
                  <div className="order-time title">{item.time} min</div>
                  <div className="order-price title">{item.price} UAH</div>
                </div>
              </div>
            ))}
          </div>
          <div className="summary">
            <div className="sum-time title">Wait for {this.countTime()} min</div>
            <div className="sum-price title">Total price {this.countPrice()} UAH</div>
          </div>
          <div className="order-btns">
            <button onClick={this.hideOrder} className="ok-btn title">OK</button>
            <button onClick={this.hideOrder} className="ok-btn title">Close</button>
          </div>
        </div>
      </div>
    );
  }
}
 
export default connect(
  state => ({
    currentStore: state.pizzaList
  }),
  dispatch => ({})
)(Order)