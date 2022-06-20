import './Contador.css'
import React, { Component } from 'react';

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.numeroInicial || 5,
  }

  inc = () => {
    const { numero, passo } = this.state
    this.setState({
      numero: numero + passo,
    })
  }

    dec = () => {
    const { numero, passo } = this.state
    this.setState({
      numero: numero - passo,
    })
  }

  setPasso = (e) => {
    this.setState({ passo: +e.target.value})
  }

  render() {
    const { numero, passo} = this.state
    return(
      <div className="Contador">
        <h2>Contador</h2>
        <h3>{numero}</h3>
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input 
          id='passoInput' 
          type="number"
          value={passo}
          onChange={this.setPasso}
          />
        </div>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}