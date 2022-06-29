import React, { Component } from 'react';

class PassoForm extends Component {
  render() {
    const { passo, setPasso } = this.props;
    return(
      <div>
          <label htmlFor="passoInput">Passo: </label>
          <input 
          id='passoInput' 
          type="number"
          value={passo}
          onChange={e => setPasso(+e.target.value)}
          />
      </div>
    )
  }
}

export default PassoForm;