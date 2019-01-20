import React, { Component } from 'react'

export class ZipCodeHistory extends Component {

  zipSelected = (e, zip) => {
    e.preventDefault();
    this.props.zipEntered(zip);
  }

  render() {
    return (
      <nav className="zipCodeHistory">
        <span>Recent Locations</span>
        <ul>
          {this.props.zipCodeHistory.map((zipCode, index) => {
            return (
              <li key={ index }>
                <a href="/" onClick={(e) => {this.zipSelected(e, zipCode)}}>{ zipCode }</a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

}
