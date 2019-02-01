import React from 'react'
import PropTypes from 'prop-types'
import { InfoModal } from '../modal/InfoModal'
import { ConditionsDetail } from './ConditionsDetail'
import { Units } from './../../classes/Units'

export const Conditions = (props) => {
  const {conditions} = props

  return (
    <div className="conditions">
      <h3>{conditions.weather[0] ? conditions.weather[0].main : 'N/A'}</h3>

      <p>Current Temp</p>
      <h3>{Math.round(conditions.main.temp)}<sup>&deg; {Units.tempUnit()}</sup></h3>

      <p>Wind Speed</p>
      <h4>{conditions.wind.speed} <sup>{Units.speedUnit()}</sup></h4>

      <InfoModal modalTitle={props.title}>
        <ConditionsDetail conditions={ conditions } />
      </InfoModal>
    </div>
  )
}

Conditions.propTypes = {
  title: PropTypes.string.isRequired,
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
