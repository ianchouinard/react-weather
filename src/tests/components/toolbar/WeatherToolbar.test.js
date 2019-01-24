import React from 'react';
import renderer from 'react-test-renderer';
import { WeatherToolbar } from './../../../components/toolbar/WeatherToolbar'

describe('WeatherToolbar', () => {
  const component = renderer.create(
    <WeatherToolbar 
      zipEntered={() => {}}
      zipCode={'03063'}
      zipCodeHistory={['03063']}
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
      const component = renderer.create(
        <WeatherToolbar 
          zipEntered={() => {}}
          zipCode={'03063'}
          zipCodeHistory={['03063']}
          conditions={mockCondition(800)} />
      )

      const source = component.getInstance().getImageSource()

      console.log(source)
    })
  })
})
