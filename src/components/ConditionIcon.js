import React from 'react'
import { ReactComponent as StatusClouds } from './../img/status_clouds.svg'
import { ReactComponent as StatusSunny } from './../img/status_sunny.svg'
import { ReactComponent as StatusMostClouds } from './../img/status_most_clouds.svg'
import { ReactComponent as StatusRain } from './../img/status_rain.svg'
import { ReactComponent as StatusSnow } from './../img/status_snow.svg'
import { ReactComponent as StatusStorm } from './../img/status_storm.svg'
import { ReactComponent as StatusFog } from './../img/status_fog.svg'

export const ConditionIcon = (props) => {
    const { icon } = props
    // condition codes https://openweathermap.org/weather-conditions
    const cloudIcons = ['03d', '03n', '04d', '04n']
    const sunnyIcons = ['01d', '01n']
    const mostCloudIcons = ['02d', '02n']
    const rainIcons = ['09d', '09n', '10d', '10n']
    const stormIcons = ['11d', '11n']
    const snowIcons = ['13d', '13n']
    const fogIcons = ['50d', '50n']

    if (cloudIcons.indexOf(icon) > -1) {
      return (
        <StatusClouds />
      )
    }

    if (sunnyIcons.indexOf(icon) > -1) {
      return (
        <StatusSunny />
      )
    }

    if (mostCloudIcons.indexOf(icon) > -1) {
      return (
        <StatusMostClouds />
      )
    }

    if (rainIcons.indexOf(icon) > -1) {
      return (
        <StatusRain />
      )
    }

    if (stormIcons.indexOf(icon) > -1) {
      return (
        <StatusStorm />
      )
    }

    if (snowIcons.indexOf(icon) > -1) {
      return (
        <StatusSnow />
      )
    }

    if (fogIcons.indexOf(icon) > -1) {
      return (
        <StatusFog />
      )
    }
  
    return (
      <StatusSunny />
    )
}
