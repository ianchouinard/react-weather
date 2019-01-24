const initialState = {
  zipCodeHistory: [],
  zipCode: 0,
  unitType: 'imperial'
}

export const ForecastMetaReducer = (state = initialState, action) => {

  if (action.type === 'SET_ZIP') {
    let updatedHistory = []
    const isDuplicate = state.zipCodeHistory.indexOf(action.payload) > -1

    if (!isDuplicate) {
      updatedHistory = [action.payload].concat(state.zipCodeHistory)
    } else {
      updatedHistory = state.zipCodeHistory
    }

    localStorage.setItem('zip_history', JSON.stringify(updatedHistory));

    return Object.assign({}, state, {
      zipCode: action.payload,
      zipCodeHistory: updatedHistory
    })
  }

  if (action.type === 'ADD_ZIP_HISTORY') {
    const isDuplicate = state.zipCodeHistory.indexOf(action.payload) > -1
    if (!isDuplicate) {
      const newHistory = [action.payload].concat(state.zipCodeHistory)
      localStorage.setItem('zip_history', JSON.stringify(newHistory))
      return Object.assign({}, state, {
        zipCodeHistory: newHistory
      })
    }
  }

  if (action.type === 'SET_ZIP_HISTORY') {
    return Object.assign({}, state, {
      zipCodeHistory: action.payload,
      zipCode: action.payload[0]
    })
  }

  if (action.type === 'SET_UNIT_TYPE') {
    localStorage.setItem('unit_type', action.payload)
    return Object.assign({}, state, {
      unitType: action.payload
    })
  }

  return state;
}
