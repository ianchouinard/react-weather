import React, { Component } from 'react'
import { MenuToggle } from '../MenuToggle'

export class ZipCodeHistory extends Component {

  state = {
    menuOpen: false
  }

  zipSelected = (e, zip) => {
    e.preventDefault()
    this.props.zipEntered(zip)
  }

  toggleMenu = () => {
    const menuState = this.state.menuOpen

    this.setState({
      menuOpen: !menuState
    })
  }

  render() {
    return (
      <nav className="zipCodeHistory">
        <MenuToggle open={this.state.menuOpen} toggleClick={this.toggleMenu} />
        <span>Recent Locations</span>
        <ul className={(this.state.menuOpen ? 'mobileOpen' : '')}>
          {this.props.zipCodeHistory.map((zipCode, index) => {
            return (
              <li key={ index }>
                <a
                  href="/"
                  title={`View weather for ${zipCode}`}
                  onClick={(e) => {this.zipSelected(e, zipCode)}}>{ zipCode }</a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

}
