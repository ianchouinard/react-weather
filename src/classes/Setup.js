import { store } from './../store/store'
import { setZipHistory, setZipCode, setUnitType } from './../actions/ForecastActions'

export class Setup {

  static setupZipCodeHistory() {
    let history = localStorage.getItem('zip_history')

    // Validate history is an array of strings
    if (history) {
      history = JSON.parse(history)
      let validArray = true
      if (Array.isArray(history) && history.length > 0) {
        history.forEach((zip) => {
          if (!zip || typeof zip !== 'string' || zip.trim() === '') {
            validArray = false
          }
        })
      } else {
        validArray = false
      }

      if (validArray) {
        store.dispatch(setZipHistory(history))
      } else {
        store.dispatch(setZipCode('03063'))
      }
    } else {
      // Using Nashua NH as a defult
      store.dispatch(setZipCode('03063'))
    }
  }

  static setupUnitType() {
    const unitType = localStorage.getItem('unit_type')

    if (unitType && (unitType === 'imperial' || unitType === 'metric')) {
      store.dispatch(setUnitType(unitType))
    }
  }

}
