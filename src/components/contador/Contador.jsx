import './Contador.css'
import React, { Component } from 'react';
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

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

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    })
  }

  render() {
    const { numero, passo } = this.state
    return(
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={ numero }/>
        <PassoForm passo={passo} setPasso={ this.setPasso }/>
      <Botoes setInc={ this.inc } setDec={ this.dec }/>
      </div>
    )
  }
}