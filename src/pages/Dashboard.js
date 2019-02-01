import React, { Component } from 'react'
import { store } from './../store/store'
import { WeatherToolbar } from './../components/dashboard/toolbar/WeatherToolbar'
import { CurrentConditionsUrl, ForecastUrl } from './../Constants'
import { ContentWrapper } from './../components/dashboard/ContentWrapper'
import Axios from 'axios'
import { removeZipHistory } from '../actions/ForecastActions';

export class Dashboard extends Component {
  state = {
    currentConditions: {},
    futureConditions: [],
    zipCodeHistory: [],
    zipCode: 0,
    currentConditionsLoaded: false,
    isLoadingConditions: false
  }

  constructor() {
    super()
    this.storeSubscription = null
  }

  componentWillMount() {
    this.zipEntered()
  }

  componentDidMount() {
    this.storeSubscription = store.subscribe(() => {
      this.zipEntered()
    })
  }

  componentWillUnmount() {
    this.storeSubscription()
  }

  zipEntered = () => {
    const state = store.getState().meta
    const zipCode = state.zipCode
    const unitType = state.unitType

    this.setState({
      isLoadingConditions: true,
      zipCode: zipCode
    })

    Axios.all([
      Axios.get(CurrentConditionsUrl(zipCode, unitType)),
      Axios.get(ForecastUrl(zipCode, unitType))
    ]).then(Axios.spread((res1, res2) => {
      this.setState({
        currentConditionsLoaded: true,
        currentConditions: res1.data,
        isLoadingConditions: false,
        futureConditions: res2.data.list
      })
    }))
    .catch(error => {
      alert(
      `There was a problem getting current conditions. Please try again in a few minutes or try another zip code.`
      );
      this.setState({isLoadingConditions: false})
      store.dispatch(removeZipHistory(zipCode))
    })
  }

  render() {
    return (
      <div className="dashboard">
        <WeatherToolbar
          zipCode={this.state.zipCode}
          conditions={this.state.currentConditions} />
        <ContentWrapper
          currentConditionsLoaded={this.state.currentConditionsLoaded}
          currentConditions={this.state.currentConditions}
          futureConditions={this.state.futureConditions}
          isLoadingConditions={this.state.isLoadingConditions} />
      </div>
    )
  }
}
