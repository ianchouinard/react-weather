import { createStore } from 'redux'
import { ZipCodeReducer } from './../reducers/ZipCodeReducer'

export const store = createStore(ZipCodeReducer)
