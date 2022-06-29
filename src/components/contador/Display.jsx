import React, { Component } from 'react';

class Display extends Component {
  render() {
    const { numero } = this.props;
    return(
        <h3>{numero}</h3>
    )
  }
}

export default Display;