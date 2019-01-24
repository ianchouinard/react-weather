import React, { Component } from 'react'
import { DayConditions } from './DayConditions'
import PropTypes from 'prop-types'

export class FutureConditions extends Component {

  /**
   * Determine the % width for each item based on the number of items.
   */
  getWrapperWidth = () => {
    return (100 / this.props.conditions.length )
  }

  render() {
    return this.props.conditions.map((condition) => (
      <div key={condition.dt} className="dayConditonWrapper" style={{width: `${this.getWrapperWidth()}%`}}>
        <DayConditions key={condition.dt} currentConditions={condition} />
      </div>
    ))
  }

}

FutureConditions.propTypes = {
  conditions: PropTypes.array.isRequired
}
