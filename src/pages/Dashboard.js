import React, { Component } from 'react'
import { store } from './../store/store'
import { WeatherToolbar } from './../components/dashboard/toolbar/WeatherToolbar'
import { CurrentConditionsUrl, ForecastUrl } from './../Constants'
import { ContentWrapper } from './../components/dashboard/ContentWrapper'
import Axios from 'axios'

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
    this.storeSubscription =store.subscribe(() => {
      this.zipEntered()
    })
  }

  componentWillUnmount() {
    this.storeSubscription()
  }

  zipEntered = () => {
    const state = store.getState()
    const zipCode = state.zipCode
    const unitType = state.unitType

    this.setState({
      isLoadingConditions: true,
      zipCode: zipCode
    })

    Axios.get(CurrentConditionsUrl(zipCode, unitType))
      .then(res => {
        this.setState({
          currentConditionsLoaded: true,
          currentConditions: res.data,
          isLoadingConditions: false
        });
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          // Only going to show an alert for a 404 for one of these api calls.
          alert('Location for the zip code not found. Please try another zip code')
        } else {
          alert('There was a problem getting current conditions. Please try again in a few minutes.')
        }

        this.setState({isLoadingConditions: false})
      });

    Axios.get(ForecastUrl(zipCode, unitType))
      .then(res => {
        this.setState({ futureConditions: res.data.list })
      })
      .catch(error => {
        alert('There was a problem getting the future forecast. Please try again in a few minutes.')
        this.setState({isLoadingConditions: false})
      });
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