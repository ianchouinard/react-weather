const apiKey

const locationInfoUrl = (location) => {
  return `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`
}
