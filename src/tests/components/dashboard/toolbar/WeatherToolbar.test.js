import React from 'react';
import renderer from 'react-test-renderer';
import { WeatherToolbar } from './../../../../components/dashboard/toolbar/WeatherToolbar'

describe('WeatherToolbar', () => {
  const component = renderer.create(
    <WeatherToolbar
      zipCode={'03063'}
      conditions={{}} />
  )

  it('should create the component', () => {
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('zipLooksInvalid()', () => {
    it('should return false if zipcode looks valid', () => {
      const zipTestValid = component.getInstance().zipLooksInvalid()
      expect(zipTestValid).toBe(false)
    })

    it('should return true if zipcode looks invalid', () => {
      component.getInstance().setState({zipCode: 'nope'})
      const zipTestInvalid = component.getInstance().zipLooksInvalid()
      expect(zipTestInvalid).toBe(true)
      component.getInstance().setState({zipCode: '03063'})
    })
  })

  describe('getImageSource()', () => {

    const mockCondition = (id) => {
      return {
        weather: [
          {
            id: id
          }
        ]
      }
    }

    it('should figure out an appropriate image source', () => {
      const component1 = renderer.create(
        <WeatherToolbar
          zipCode={'03063'}
          conditions={mockCondition(800)} />
      )
      const test1 = component1.getInstance().getImageSource()
      expect(test1).toBe('header_bg.jpg')

      const component2 = renderer.create(
        <WeatherToolbar
          zipCode={'03063'}
          conditions={mockCondition(600)} />
      )
      const test2 = component2.getInstance().getImageSource()
      expect(test2).toBe('header_bg_snow.jpg')

      const component3 = renderer.create(
        <WeatherToolbar
          zipCode={'03063'}
          conditions={mockCondition(200)} />
      )
      const test3 = component3.getInstance().getImageSource()
      expect(test3).toBe('header_bg_rain.jpg')
    })
  })
})
