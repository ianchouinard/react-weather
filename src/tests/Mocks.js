
export const mockCondition = (id, temp, wind) => {
  return {
    name: 'name',
    dt: new Date('1/1/2000').getTime(),
    weather: [
      {
        id: id || 800
      }
    ],
    main: {
      temp: temp || 32
    },
    wind: {
      speed: wind || 0
    }
  }
}
