import { createStore } from 'redux'
import { ForecastMetaReducer } from './../reducers/ForecastMetaReducer'

export const store = createStore(ForecastMetaReducer)
