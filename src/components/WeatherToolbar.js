import React, {Component} from 'react'
import background from './../img/header_bg.jpg'

export class WeatherToolbar extends Component {

  state = {
    zipCode: '03063',
    zipLooksValid: true
  }

  /**
   * Update the zipcode state.
   */
  zipChanged = (e) => this.setState({zipCode: e.target.value})

  /**
   * Emit the entered zip code.
   */
  zipEntered = (e) => {
    e.preventDefault()
    this.props.zipEntered(this.state.zipCode)
  }

  /**
   * Attempt to determine if the zip looks valid.
   * Will be disabled if true
   */
  zipLooksInvalid = () => {
    if (isNaN(parseInt(this.state.zipCode))) {
      return true
    }

    if (this.state.zipCode.length !== 5) {
      return true
    }

    return false
  }

  render() {
    return(
      <section className="weatherToolbar" style={{backgroundImage: `url(${background})`}}>
        <div className="container">
          <form className="toolbar">
            <h1>Find Your Local Weather</h1>
            
            <div className="form-group">
              <label>Zip Code</label>
              <input
                type="number"
                placeholder="zip code"
                value={this.state.zipCode}
                onChange={this.zipChanged} />
              <button
                type="submit"
                disabled={this.zipLooksInvalid()}
                onClick={this.zipEntered}>Get Weather</button>
            </div>
          </form>
        </div>
      </section>
    )
  }

}
