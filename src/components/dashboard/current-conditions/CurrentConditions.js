import React, { Component } from 'react'
import { ConditionIcon } from './../../ConditionIcon'
import { Conditions } from '../Conditions';

export class CurrentConditions extends Component {

  render() {
    const {currentConditions} = this.props

    return (
      <div className="currentConditions">
        <div className="currentConditionsMeta">
          <h2>Current conditions for the <strong>{ currentConditions.name }</strong> area</h2>
        </div>

        <div className="conditionsContent">
          <ConditionIcon icon={currentConditions.weather[0] ? currentConditions.weather[0].icon : null} />
          <Conditions conditions={currentConditions} />
        </div>
      </div>
    )
  }

} 
