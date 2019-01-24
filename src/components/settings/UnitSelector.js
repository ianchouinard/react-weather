import React, { Component } from 'react'
import { store } from '../../store/store';
import { setUnitType } from '../../actions/ForecastActions';

export class UnitSelector extends Component {

  state = {
    isImperial: true,
    isMetric: false
  }

  constructor() {
    super()
    this.storeSubscription = null
  }

  componentWillMount() {
    this.getUnitSelection()
  
    this.storeSubscription = store.subscribe(() => {
      this.getUnitSelection()
    })
  }

  componentWillUnmount() {
    this.storeSubscription()
  }

  getUnitSelection() {
    const unit = store.getState().unitType
    if (unit === 'metric') {
      this.setState((state, props) => {
        return {
          isImperial: false,
          isMetric: true
        }
      })
    } else {
      this.setState((state, props) => {
        return {
          isImperial: true,
          isMetric: false
        }
      })
    }
  }

  setUnit(e) {
    store.dispatch(setUnitType(e.target.id))
  }

  render() {
    return (
      <form id="unitSelectorForm" className="unitSelector">
          <h4>Units</h4>
          <div className="form-group">
            <div className="appRadio">
              <input
                id="imperial"
                type="radio"
                name="UnitSelect"
                checked={this.state.isImperial}
                onChange={this.setUnit} />
              <label htmlFor="imperial" tabIndex="0">Imperial</label>
            </div>

            <div className="appRadio">
              <input
                id="metric"
                type="radio"
                name="UnitSelect"
                checked={this.state.isMetric}
                onChange={this.setUnit} />
              <label htmlFor="metric" tabIndex="0">Metric</label>
            </div>
          </div>
      </form>
    )
  }

}
