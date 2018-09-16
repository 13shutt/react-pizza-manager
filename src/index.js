import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(pizzaList, REDUX_DEVTOOLS)

function pizzaList(state = [], action) {
  switch(action.type) {
    case 'ADD_PIZZA': {
      return [
        ...state,
        action.payload
      ];
    }
    case 'REMOVE_PIZZA': {
      const arr = state.reverse()
      for(let i = 0; i < arr.length; i++) {
        if(arr[i].title === action.payload) {
          const newArr = [
            ...arr.slice(0, i),
            ...arr.slice(i + 1, arr.length)
          ]
          return newArr.reverse()
        }
      }
    }
    default: return state;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));
