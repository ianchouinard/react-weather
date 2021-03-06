import React, {Component} from 'react'
import { ZipCodeHistory } from './ZipCodeHistory'
import { store } from './../../../store/store'
import { setZipCode } from './../../../actions/ForecastActions'
import background from './../../../img/header_bg.jpg'
import backgroundRain from './../../../img/header_bg_rain.jpg'
import backgroundSnow from './../../../img/header_bg_snow.jpg'
import PropTypes from 'prop-types'

export class WeatherToolbar extends Component {

  state = {
    zipCode: '03063',
    zipLooksValid: true
  }

  componentWillReceiveProps(props) {
    this.setState({
      zipCode: props.zipCode
    })
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
    store.dispatch(setZipCode(this.state.zipCode))
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

  /**
   * Get header background based on weather condtions
   * weather code info here 
   * https://openweathermap.org/weather-conditions
   */
  getImageSource = () => {
    if (!this.props.conditions || !this.props.conditions.weather) {
      return ''
    }
    
    const code = this.props.conditions.weather[0].id
    if (code >= 700) {
      return background // normal
    } else if (code >= 600) {
      return backgroundSnow // snow
    } else if (code >= 200) {
      return backgroundRain // rain
    } else {
      return background
    }
  }

  render() {
    return(
      <section className="weatherToolbar" style={{backgroundImage: `url(${this.getImageSource()})`}}>
        <div className="container">
          <ZipCodeHistory />

          <form className="toolbar">
            <h1>Find Your Local Weather</h1>
            
            <div className="form-group">
              <label>Zip Code</label>
              <input
                type="text"
                placeholder="zip code"
                value={this.state.zipCode}
                onChange={this.zipChanged} />
              <button
                type="submit"
                disabled={this.zipLooksInvalid()}
                onClick={this.zipEntered}
                title="Get forecast for this location">Get Weather</button>
            </div>
          </form>
        </div>
      </section>
    )
  }

}

WeatherToolbar.propTypes = {
  zipCode: PropTypes.string.isRequired,
  conditions: PropTypes.object.isRequired
}

