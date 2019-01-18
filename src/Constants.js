const apiKey = '7dfc4a3f6ee2b253293df23c0182f01d';

export const CurrentConditionsUrl = (zipCode) => {
  return `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`;
}

export const ForecastUrl = (zipCode) => {
  return `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=${apiKey}&units=imperial`;
}
