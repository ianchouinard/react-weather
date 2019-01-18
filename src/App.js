import React, { Component } from 'react';
import { WeatherToolbar } from './components/WeatherToolbar';
import { CurrentConditionsUrl, ForecastUrl } from './Constants';
import { ContentWrapper } from './components/ContentWrapper';
import { Header } from './layout/Header';
import Axios from 'axios';
import './App.scss';

class App extends Component {
  state = {
    currentConditions: {},
    futureConditions: [],
    currentConditionsLoaded: false,
    isLoadingConditions: false
  }

  componentDidMount() {
    // Using Nashua NH as a defult
    this.zipEntered('03063');
  }

  zipEntered = (zipCode) => {
    this.setState({isLoadingConditions: true});

    Axios.get(CurrentConditionsUrl(zipCode))
      .then(res => {
        this.setState({
          currentConditionsLoaded: true,
          currentConditions: res.data,
          isLoadingConditions: false
        });
      })
      .catch(error => {
        console.log(error.response)
        if (error.response && error.response.status === 404) {
          // Only going to show an alert for a 404 for one of these api calls.
          alert('Location for the zip code not found. Please try another zip code');
        } else {
          alert('There was a problem getting current conditions. Please try again in a few minutes.');
        }
      });

    Axios.get(ForecastUrl(zipCode))
      .then(res => {
        this.setState({ futureConditions: res.data.list });
      })
      .catch(error => {
        alert('There was a problem getting the future forecast. Please try again in a few minutes.');
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <WeatherToolbar zipEntered={this.zipEntered} />
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
