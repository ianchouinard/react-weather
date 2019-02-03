const apiKey = 'AIzaSyClE4bKdB1dSdpUNAq1SGQ0OOzZcbbUDb4'

const locationInfoUrl = (location) => {
  return `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`
}
