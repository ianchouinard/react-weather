import React from 'react'
import { Units } from '../../classes/Units';

export const ConditionsDetail = (props) => {
  const { main, rain, snow } = props.conditions
  return (
    <div className="condtionsDetail">
      <div className="row">
        <div className="col">
          High Temp: <strong>{ main.temp_max }</strong>
          <sup>&deg; { Units.tempUnit() }</sup>
        </div>
        <div className="col">
          Low Temp: <strong>{ main.temp_min }</strong>
          <sup>&deg; { Units.tempUnit() }</sup>
        </div>
      </div>
      <div className="row">
        <div className="col">
          Humidity: <strong>{ main.humidity }</strong>
          <sup>{ Units.humidityUnit() }</sup>
        </div>
        <div className="col">
          Pressure: <strong>{ main.pressure }</strong>
        </div>
      </div>
      {
        (() => {
          if (snow && (snow['1h'] ||  snow['3h'])) {
            const snow1h = snow['1h'] ? snow['1h'].toFixed(2) : null
            const snow3h = snow['3h'] ? snow['3h'].toFixed(2) : null
            return (
              <div>
                Snow: <strong>{ snow1h || snow3h }</strong>
                <sup>{Units.precipitationUnit()}</sup>
              </div>
            )
          }
        })()
      }

      {
        (() => {
          if (rain && (rain['1h'] ||  rain['3h'])) {
            const rain1h = rain['1h'] ? rain['1h'].toFixed(2) : null
            const rain3h = rain['3h'] ? rain['3h'].toFixed(2) : null
            return (
              <div>
                Rain: <strong>{ rain1h || rain3h }</strong>
                <sup>{ Units.precipitationUnit() }</sup>
              </div>
            )
          }
        })()
      }
    </div>
  )
}
