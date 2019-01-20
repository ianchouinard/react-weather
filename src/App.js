import React, { Component } from 'react'
import { WeatherToolbar } from './components/toolbar/WeatherToolbar'
import { CurrentConditionsUrl, ForecastUrl } from './Constants'
import { ContentWrapper } from './components/ContentWrapper'
import { Header } from './layout/Header'
import Axios from 'axios'
import './App.scss'

class App extends Component {
  state = {
    currentConditions: {},
    futureConditions: [],
    zipCodeHistory: [],
    zipCode: 0,
    currentConditionsLoaded: false,
    isLoadingConditions: false
  }

  componentWillMount() {
    let history = localStorage.getItem('zip_history');

    if (history) {
      history = JSON.parse(history)
      this.setState({
        zipCodeHistory: history,
        zipCode: history[0]
      })
    } else {
      // Using Nashua NH as a defult
      this.setState({
        zipCode: '03063',
        zipCodeHistory: ['03063']
      })
    }
  }

  componentDidMount() {
    document.title = 'React Weather'
    this.zipEntered(this.state.zipCode)
  }

  updateZipCodeHistory = (zipCode) => {
    const isDuplicate = this.state.zipCodeHistory.indexOf(zipCode) > -1

    if (!isDuplicate) {
      return [zipCode].concat(this.state.zipCodeHistory)
    } else {
      return this.state.zipCodeHistory
    }
  }

  zipEntered = (zipCode) => {
    this.setState({
      isLoadingConditions: true,
      zipCode: zipCode
    })

    Axios.get(CurrentConditionsUrl(zipCode))
      .then(res => {
        this.setState({
          currentConditionsLoaded: true,
          currentConditions: res.data,
          isLoadingConditions: false,
          zipCodeHistory: this.updateZipCodeHistory(zipCode)
        });

        localStorage.setItem('zip_history', JSON.stringify(this.state.zipCodeHistory));
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

    Axios.get(ForecastUrl(zipCode))
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
      <div className="App">
        <Header />
        <WeatherToolbar 
          zipEntered={this.zipEntered}
          zipCode={this.state.zipCode}
          zipCodeHistory={this.state.zipCodeHistory} />
        <ContentWrapper
          currentConditionsLoaded={this.state.currentConditionsLoaded}
          currentConditions={this.state.currentConditions}
          futureConditions={this.state.futureConditions}
          isLoadingConditions={this.state.isLoadingConditions} />
      </div>
    );
  }
}

export default App;
