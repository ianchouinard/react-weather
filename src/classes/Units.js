import { store } from './../store/store'

export class Units {

  static tempUnit() {
    const unit = store.getState().meta.unitType
    return (unit === 'metric') ? 'C' : 'F'
  }

  static speedUnit() {
    const unit = store.getState().meta.unitType
    return (unit === 'metric') ? 'kph' : 'mph'
  }

  static precipitationUnit() {
    return 'mm'
  }

  static humidityUnit() {
    return '%'
  }

}
