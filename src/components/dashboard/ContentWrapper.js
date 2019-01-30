import React, { Component } from 'react'
import { CurrentConditions } from './current-conditions/CurrentConditions'
import { ScrollContainer } from './../ScrollContainer'
import { FutureConditionsChart } from './future-conditions/FutureConditionsChart'
import { FutureConditions } from './future-conditions/FutureConditions'

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
          <ScrollContainer items={this.props.futureConditions}>
            <FutureConditions conditions={this.props.futureConditions} />
          </ScrollContainer>
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
