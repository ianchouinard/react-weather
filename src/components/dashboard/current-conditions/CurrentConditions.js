import React, { Component } from 'react'
import { ConditionIcon } from './../../ConditionIcon'
import { Conditions } from '../Conditions'
import PropTypes from 'prop-types'

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

CurrentConditions.propTypes = {
  currentConditions: PropTypes.shape({
    name: PropTypes.string.isRequired,
    weather: PropTypes.array.isRequired
  })
}
