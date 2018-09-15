import React, { Component } from 'react'
import { connect } from 'react-redux'
class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  
  pizzaAmountPlus = () => {
    this.setState({ counter: this.state.counter + 1 })
    this.props.onAddPizza(this.props.title, this.props.time, this.props.price)
  }

  pizzaAmountMinus = () => {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <div className="card effect8">
        <h5 className="title bigger">{this.props.title}</h5>
        <img src={ require(`../../img/pizza/${this.props.img}`) } alt="pezdos"/>
        <div className="data">
          <span className="time-left title">{this.props.time} min</span>
          <span className="price title">{this.props.price} UAH</span>
          <span className="count-items">
            <button onClick={this.pizzaAmountMinus} className={this.state.counter === 0 ? "disabled-btn" : "minus-btn"}>-</button>
            <span className="count title">{this.state.counter}</span>
            <button onClick={this.pizzaAmountPlus} className="plus-btn">+</button>
          </span>
        </div>
        <span className="contains decript">{this.props.contains}</span>
      </div>
    );
  }
}
 
export default connect(
  state => ({
    currentStore: state
  }),
  dispatch => ({
    onAddPizza: (name, time, price) => {
      dispatch({type: 'ADD_PIZZA', payload: {title: name, time: time, price: price}})
    }
  })
)(Pizza)