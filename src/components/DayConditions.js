import React, { Component } from 'react'
import { ConditionIcon } from './ConditionIcon'

export class DayConditions extends Component {

  /**
   * Creates special formatting for the forecast entry date.
   * Formats as MM/DD HHpm/am
   */
  formatDate = () => {
    // Unix timestamp from api. Need to add 1000
    const date = new Date(this.props.currentConditions.dt * 1000)
    const month = date.getMonth() + 1
    const day = date.getDate()
    const time = date.toLocaleString('en-US', { hour: 'numeric', hour12: true })
    return `${month}.${day} ${time}`
  }

  render() {
    const {currentConditions} = this.props
  
    return (
      <div className="dayConditions">
        <div className="date">{ this.formatDate() }</div>
        
        <div className="conditionStatus">
          <ConditionIcon icon={currentConditions.weather[0].icon} />
        </div>

        <div className="conditions">
          <h3>{ currentConditions.weather[0].main }</h3>

          <p>Current Temp</p>
          <h3>{ Math.round(currentConditions.main.temp) } <sup>&deg;</sup></h3>

          <p>Wind Speed</p>
          <h4>{ currentConditions.wind.speed } <sup>mph</sup></h4>
        </div>
      </div>
    )
  }

}
