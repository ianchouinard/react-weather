import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Transforms } from '../../../classes/Transforms'
import { store } from './../../../store/store'
import PropTypes from 'prop-types'

export class FutureConditionsChart extends Component {

  state = {
    chartData: {}
  }

  createChartData = () => {
    const dates = []
    const temps = []

    this.props.futureConditions.forEach((conditon) => {
      dates.push(Transforms.date(conditon.dt))
      temps.push(conditon.main.temp)
    })

    const unit = store.getState().unitType
    const tempUnit = (unit === 'metric') ? 'c' : 'f'

    return {
      labels: dates,
      datasets: [
        {
          data: temps,
          label: `Temp (${tempUnit})`,
          borderColor: "#3FBF7F",
          fill: true,
          backgroundColor: "rgba(38, 124, 81, 0.05)"
        }
      ]
    }
  }

  render() {
    const chartData = this.createChartData()

    return (
      <section className="chartContainer">
        <div className="container">
          <h5>Temperature Over Time</h5>
          <div className="chartWrapper">
            <div className="chartWrapperInner">
              <Line data={chartData} height={70}/>
            </div>
          </div>
        </div>
      </section>
    )
  }

}

FutureConditionsChart.propTypes = {
  futureConditions: PropTypes.array.isRequired
}
