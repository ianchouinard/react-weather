import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Transforms } from '../../classes/Transforms';

export class FutureConditionsChart extends Component {

  state = {
    chartData: {}
  }

  componentWillReceiveProps() {
    setTimeout(() => {
      this.createChartData()
    }, 0)
  }

  createChartData = () => {
    const dates = []
    const temps = []

    this.props.futureConditions.forEach((conditon) => {
      dates.push(Transforms.date(conditon.dt))
      temps.push(conditon.main.temp)
    });

    this.setState({
      chartData: {
        labels: dates,
        datasets: [
          {
            data: temps,
            label: 'Temp (f)',
            borderColor: "#3FBF7F",
            fill: true,
            backgroundColor: "rgba(38, 124, 81, 0.05)"
          }
        ]
      }
    })
  }

  render() {
    return (
      <section className="chartContainer">
        <div className="container">
          <h5>Temperature Over Time</h5>
          <div className="chartWrapper">
            <div className="chartWrapperInner">
              <Line data={this.state.chartData} height={70}/>
            </div>
          </div>
        </div>
      </section>
    )
  }

}
