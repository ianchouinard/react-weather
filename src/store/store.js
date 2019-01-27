import { createStore, combineReducers } from 'redux'
import { ForecastMetaReducer } from './../reducers/ForecastMetaReducer'

const rootReducer = combineReducers({
  meta: ForecastMetaReducer
})

export const store = createStore(rootReducer)
