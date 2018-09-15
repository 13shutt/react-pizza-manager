import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(pizzaList)

function pizzaList(state = [], action) {
  switch(action.type) {
    case 'ADD_PIZZA': {
      return [
        ...state,
        action.payload
      ];
    }
    default: return state;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));
