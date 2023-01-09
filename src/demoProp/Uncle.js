import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Uncle extends Component {


  render() {
    return (
        <div className = " bg-info  p-3">
        <h1> Uncle</h1>
        <h3>Avatar : {this.props.avatar}</h3>
        </div>
    )
  }
}
