import React, { Component } from 'react';
import './App.css';
import CurrencyConverter from './Components/CurrencyConverter';

class App extends Component {
  render() {
    return (
      <>
        <h2>Render Props</h2>
        <CurrencyConverter render={(currencyData, amount) => (
          <p>
            US Dollar ${amount.toFixed(2)} - {currencyData.name}{' '}
            {currencyData.symbol}
            {(amount * currencyData.rate).toFixed(2)}
          </p>
        )} />
      </>
    );
  }
}

export default App;
