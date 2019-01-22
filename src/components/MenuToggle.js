import React, { Component } from 'react'

export class MenuToggle extends Component {

  render() {
    return (
      <button
        className={'menuToggle ' + (this.props.open ? 'open' : '')}
        onClick={this.props.toggleClick.bind(this)}
        title={(this.props.open ? 'Close Menu' : 'Open Menu')}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    )
  }

}
