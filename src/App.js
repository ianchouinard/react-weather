import React, { Component, Suspense } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Setup } from './classes/Setup'
import { Header } from './layout/Header'
import { Dashboard } from './pages/Dashboard'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss'
const Settings = React.lazy(() => import('./pages/Settings'))

const settingsPage = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Settings />
    </Suspense>
  )
}

class App extends Component {

  componentWillMount() {
    Setup.setupZipCodeHistory()
    Setup.setupUnitType()
  }

  componentDidMount() {
    document.title = 'React Weather'
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div id="content" role="main">
              <Route path="/" exact component={Dashboard} />
              <Route path="/settings" component={settingsPage} />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
