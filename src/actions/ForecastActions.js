
export const setZipCode = (payload) => {
  return {type: 'SET_ZIP', payload}
}

export const addZipHistory = (payload) => {
  return {type: 'ADD_ZIP_HISTORY', payload}
}

export const removeZipHistory = (payload) => {
  return {type: 'REMOVE_ZIP_HISTORY', payload}
}

export const setZipHistory = (payload) => {
  return {type: 'SET_ZIP_HISTORY', payload}
}

export const setUnitType = (payload) => {
  return {type: 'SET_UNIT_TYPE', payload}
}
