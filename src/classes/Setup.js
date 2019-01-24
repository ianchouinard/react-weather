import { store } from './../store/store'
import { setZipHistory, setZipCode, setUnitType } from './../actions/ForecastActions'

export class Setup {

  static setupZipCodeHistory() {
    let history = localStorage.getItem('zip_history')

    if (history) {
      history = JSON.parse(history)
      store.dispatch(setZipHistory(history))
    } else {
      // Using Nashua NH as a defult
      store.dispatch(setZipCode(['03063']))
    }
  }

  static setupUnitType() {
    const unitType = localStorage.getItem('unit_type')

    if (unitType && (unitType === 'imperial' || unitType === 'metric')) {
      store.dispatch(setUnitType(unitType))
    }
  }

}
