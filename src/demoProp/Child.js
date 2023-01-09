import React, { Component } from 'react'

export default class child extends Component {
  render() {
    return (
        <div className = " bg-danger  p-3">
        <h1> Child</h1>
        <h3> Email: {this.props.e}</h3>
        <h3> Age: {this.props.age}</h3>
         </div>
    );
  }
}

export default Child ;


