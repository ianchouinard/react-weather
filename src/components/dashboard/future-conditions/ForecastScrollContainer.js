import React, { Component } from 'react'
import { FutureConditions } from './FutureConditions'
import { ReactComponent as Arrow } from './../../../img/arrow.svg'
import PropTypes from 'prop-types'

export class ForecastScrollContainer extends Component {

  state = {
    xAxisTransform: 0,
    itemsPerPane: 5
  }

  /**
   * On mount, get the window size to determine how many items to show
   * at once in the window. Re run logic on resize.
   */
  componentDidMount() {
    this.calculateItemsPerPane(window.innerWidth)

    window.onresize = () => {
      this.setState({xAxisTransform: 0})
      this.calculateItemsPerPane(window.innerWidth)
    }
  }

  /**
   * Determine how many items to show per pane at a given width
   * @param {number} windowWidth
   */
  calculateItemsPerPane = (windowWidth) => {
    if (windowWidth < 480) {
      this.setState({itemsPerPane: 2})
    } else if (windowWidth < 880) {
      this.setState({itemsPerPane: 3})
    } else {
      this.setState({itemsPerPane: 5})
    }
  }

  /**
   * Get the width for the scrollable container based on the # of items
   */
  getScrollContainerWidth = () => {
    return (this.props.conditions.length / this.state.itemsPerPane) * 100
  }

  /**
   * View later forecasts by adding a negative translateX to the scroll view.
   */
  slideRight = () => {
    const translateAmount = (100 / this.props.conditions.length )
    const max = 100 - (translateAmount * this.state.itemsPerPane)

    if (Math.abs(this.state.xAxisTransform) < max) {
      this.setState({xAxisTransform: (this.state.xAxisTransform - translateAmount)})
    }
  }

  /**
   * View pealier forecasts by adding a positive translateX to the scrollview
   */
  slideLeft = () => {
    const translateAmount = this.state.xAxisTransform + (100 / this.props.conditions.length)

    if (translateAmount <= 0) {
      this.setState({xAxisTransform: translateAmount})
    }
  }

  render() {
    return (
      <div className="forecastScrollContainer container">
        <h3 className="scrollTitle">Future Forecast</h3>
        <div className="scrollContainer" style={{ width: `${this.getScrollContainerWidth()}%`, transform: `translateX(${this.state.xAxisTransform}%)` }}>
          <FutureConditions conditions={this.props.conditions} />
        </div>

        <div className="scrollControls">
          <button title="Previous" onClick={this.slideLeft}><Arrow /></button>
          <button title="Next" onClick={this.slideRight}><Arrow /></button>
        </div>
      </div>
    )
  }

}

ForecastScrollContainer.propTypes = {
  conditions: PropTypes.array.isRequired
}
