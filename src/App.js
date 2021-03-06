import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Setup } from './classes/Setup'
import { Header } from './layout/Header'
import { Dashboard } from './pages/Dashboard'
import { Settings } from './pages/Settings'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'
/*
Lazy load settings. 
COmmented out for now as github pages doesn't support this
const Settings = React.lazy(() => import('./pages/Settings'))

const settingsPage = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Settings />
    </Suspense>
  )
}
*/
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
        <Router basename="/react-weather">
          <div className="App">
            <Header />
            <div id="content" role="main">
              <Route path="/" exact component={Dashboard} />
              <Route path="/settings" component={Settings} />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
