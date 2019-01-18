import React, { Component } from 'react'
import { CurrentConditions } from './CurrentConditions'
import { ForecastScrollContainer } from './ForecastScrollContainer'

export class ContentWrapper extends Component {

  // Set display of loading bar is data is loading
  showLoadingBar = () => {
    return this.props.isLoadingConditions ? 'block' : 'none'
  }

  render() {
    if (this.props.currentConditionsLoaded) {
      return (
        <div id="content" role="main">
          <CurrentConditions currentConditions={this.props.currentConditions} />
          <ForecastScrollContainer conditions={this.props.futureConditions} />
          <div className="loader" style={{ display:  this.showLoadingBar() }}></div>
        </div>
      )
    }

    return ( 
      <div className="loader"></div>
    )
  }

}
