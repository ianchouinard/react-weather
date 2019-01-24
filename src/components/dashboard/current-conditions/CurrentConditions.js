import React, { Component } from 'react'
import { ConditionIcon } from './../../ConditionIcon'
import { store } from './../../../store/store'

export class CurrentConditions extends Component {

  render() {
    const {currentConditions} = this.props
    const unit = store.getState().unitType
    const tempUnit = (unit === 'metric') ? 'C' : 'F'
    const speedUnit = (unit === 'metric') ? 'kph' : 'mph'

    return (
      <div className="currentConditions">

        <div className="currentConditionsMeta">
          <h2>Current conditions for the <strong>{ currentConditions.name }</strong> area</h2>
        </div>

        <div className="conditionsContent">
          
          <ConditionIcon icon={currentConditions.weather[0] ? currentConditions.weather[0].icon : null} />

          <div className="conditions">

            <h3>{ currentConditions.weather[0] ? currentConditions.weather[0].main : 'N/A' }</h3>

            <p>Current Temp</p>
            <h3>{ Math.round(currentConditions.main.temp) }<sup>&deg; { tempUnit }</sup></h3>

            <p>Wind Speed</p>
            <h4>{ currentConditions.wind.speed } <sup>{ speedUnit }</sup></h4>
          </div>
        </div>
      </div>
    )
  }

} 
