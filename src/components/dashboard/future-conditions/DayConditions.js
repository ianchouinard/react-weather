import React, { Component } from 'react'
import { ConditionIcon } from './../../ConditionIcon'
import { Transforms } from '../../../classes/Transforms'
import { Conditions } from '../Conditions';

export class DayConditions extends Component {

  render() {
    const {currentConditions} = this.props
  
    return (
      <div className="dayConditions">
        <div className="date">{ Transforms.date(this.props.currentConditions.dt) }</div>
        
        <div className="conditionStatus">
          <ConditionIcon icon={currentConditions.weather[0] ? currentConditions.weather[0].icon : ''} />
        </div>

        <Conditions conditions={currentConditions} />
      </div>
    )
  }

}
