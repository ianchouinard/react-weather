import React, { Component } from 'react'
import { ConditionIcon } from './../../ConditionIcon'
import { Transforms } from '../../../classes/Transforms'
import { Conditions } from '../Conditions'
import PropTypes from 'prop-types'

export class DayConditions extends Component {

  render() {
    const {currentConditions} = this.props
  
    return (
      <div className="dayConditions">
        <div className="date">{ Transforms.date(this.props.currentConditions.dt) }</div>
        
        <div className="conditionStatus">
          <ConditionIcon icon={currentConditions.weather[0] ? currentConditions.weather[0].icon : ''} />
        </div>

        <Conditions
          conditions={currentConditions}
          title={`Conditions for ${Transforms.date(this.props.currentConditions.dt)}`} />
      </div>
    )
  }

}

DayConditions.propTypes = {
  currentConditions: PropTypes.shape({
    dt: PropTypes.date,
    weather: PropTypes.array.isRequired
  })
}
