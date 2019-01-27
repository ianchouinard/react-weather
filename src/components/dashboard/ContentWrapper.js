import React, { Component } from 'react'
import { CurrentConditions } from './current-conditions/CurrentConditions'
import { ForecastScrollContainer } from './future-conditions/ForecastScrollContainer'
import { FutureConditionsChart } from './future-conditions/FutureConditionsChart'

export class ContentWrapper extends Component {

  // Set display of loading bar is data is loading
  showLoadingBar = () => {
    return this.props.isLoadingConditions ? 'block' : 'none'
  }

  render() {
    if (this.props.currentConditionsLoaded) {
      return (
        <div className="dashboardContent">
          <CurrentConditions currentConditions={this.props.currentConditions} />
          <ForecastScrollContainer conditions={this.props.futureConditions} />
          <FutureConditionsChart futureConditions={this.props.futureConditions} />
          <div className="loader" style={{ display:  this.showLoadingBar() }}></div>
        </div>
      )
    }

    return ( 
      <div className="loader"></div>
    )
  }

}
