import React, { Component } from 'react'
import { ConditionIcon } from './../ConditionIcon'
import { Transforms } from '../../classes/Transforms';

export class DayConditions extends Component {

  render() {
    const {currentConditions} = this.props
  
    return (
      <div className="dayConditions">
        <div className="date">{ Transforms.date(this.props.currentConditions.dt) }</div>
        
        <div className="conditionStatus">
          <ConditionIcon icon={currentConditions.weather[0] ? currentConditions.weather[0].icon : ''} />
        </div>

        <div className="conditions">
          <h3>{ currentConditions.weather[0] ? currentConditions.weather[0].main : 'N/A' }</h3>

          <p>Current Temp</p>
          <h3>{ Math.round(currentConditions.main.temp) } <sup>&deg;</sup></h3>

          <p>Wind Speed</p>
          <h4>{ currentConditions.wind.speed } <sup>mph</sup></h4>
        </div>
      </div>
    )
  }

}
