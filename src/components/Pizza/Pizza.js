import React, { Component } from 'react'

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  
  pizzaAmountPlus = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  pizzaAmountMinus = () => {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() { 
    return (
      <div className="card">
        <h5 className="title">{this.props.title}</h5>
        <img src={ require(`../../img/pizza/${this.props.img}`) } alt="pezdos"/>
        <div className="data">
          <span className="time-left">{this.props.time}</span>
          <span className="price">{this.props.price}</span>
          <span>
            <button onClick={this.pizzaAmountMinus} className={this.state.counter === 0 ? "disabled" : "enabled"}>-</button>
            <span className="count">{this.state.counter}</span>
            <button onClick={this.pizzaAmountPlus}>+</button>
          </span>
        </div>
        <span className="contains">{this.props.contains}</span>
      </div>
    );
  }
}
 
export default Pizza;