import React, { Component } from 'react';

class Botoes extends Component {
  render() {
    const { setInc, setDec } = this.props;
    return(
      <div>
        <button onClick={setInc}>+</button>
        <button onClick={setDec}>-</button>
      </div>
    )
  }
}

export default Botoes;
