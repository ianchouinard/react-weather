import React from 'react'
import { store } from './../../store/store'
import PropTypes from 'prop-types'

export const Conditions = (props) => {
  const {conditions} = props
  const unit = store.getState().meta.unitType
  const tempUnit = (unit === 'metric') ? 'C' : 'F'
  const speedUnit = (unit === 'metric') ? 'kph' : 'mph'

  return (
    <div className="conditions">
      <h3>{conditions.weather[0] ? conditions.weather[0].main : 'N/A'}</h3>

      <p>Current Temp</p>
      <h3>{Math.round(conditions.main.temp)}<sup>&deg; {tempUnit}</sup></h3>

      <p>Wind Speed</p>
      <h4>{conditions.wind.speed} <sup>{speedUnit}</sup></h4>
    </div>
  )
}

Conditions.propTypes = {
  conditions: PropTypes.shape({
    weather: PropTypes.array.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired
    })
  })
}
