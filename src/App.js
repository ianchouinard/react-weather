import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Setup } from './classes/Setup'
import { Header } from './layout/Header'
import { Dashboard } from './pages/Dashboard'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss'

class App extends Component {

  componentWillMount() {
    Setup.setupZipCodeHistory()
  }

  componentDidMount() {
    document.title = 'React Weather'
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" role="main">
            <Header />
            <Route path="/" exact component={Dashboard} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
