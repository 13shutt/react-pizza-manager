import React, { Component } from 'react';

import Prewiew from './containers/Prewiew'
import MainPage from './containers/MainPage'
import './App.css'

class App extends Component {
  state = {
    isOpen: true
  }
  render() {
    if (this.state.isOpen === false) {
      return <Prewiew /> 
    } else {
        return <MainPage />
      }
  
  }
}

export default App;
