import React, { Component } from 'react'
import { ConditionIcon } from './../ConditionIcon'
import { Transforms } from '../../classes/Transforms'
import { store } from './../../store/store'

export class DayConditions extends Component {

  render() {
    const {currentConditions} = this.props
    const unit = store.getState().unitType
    const tempUnit = (unit === 'metric') ? 'c' : 'f'
    const speedUnit = (unit === 'metric') ? 'kph' : 'mph'
  
    return (
      <div className="dayConditions">
        <div className="date">{ Transforms.date(this.props.currentConditions.dt) }</div>
        
        <div className="conditionStatus">
          <ConditionIcon icon={currentConditions.weather[0] ? currentConditions.weather[0].icon : ''} />
        </div>

        <div className="conditions">
          <h3>{ currentConditions.weather[0] ? currentConditions.weather[0].main : 'N/A' }</h3>

          <p>Current Temp</p>
          <h3>{ Math.round(currentConditions.main.temp) } <sup>&deg; { tempUnit }</sup></h3>

          <p>Wind Speed</p>
          <h4>{ currentConditions.wind.speed } <sup>{ speedUnit }</sup></h4>
        </div>
      </div>
    )
  }

}
