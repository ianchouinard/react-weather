const apiKey = '7dfc4a3f6ee2b253293df23c0182f01d';

export const CurrentConditionsUrl = (zipCode, unitType) => {
  return `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=${unitType}`;
}

export const ForecastUrl = (zipCode, unitType) => {
  return `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=${apiKey}&units=${unitType}`;
}
