import React from 'react';
import renderer from 'react-test-renderer';
import { ForecastScrollContainer } from './../../../../components/dashboard/future-conditions/ForecastScrollContainer'
import { mockCondition } from '../../../Mocks';

describe('ForecastScollContainer', () => {
  const component = renderer.create(
    <ForecastScrollContainer conditions={[mockCondition()]} />
  )

  it('should create the component', () => {
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('calculateItemsPerPane()', () => {
    it('should set how many items to display', () => {
      jest.spyOn(component.getInstance(), 'setState')

      component.getInstance().calculateItemsPerPane(400)
      expect(component.getInstance().setState).toHaveBeenCalledWith({itemsPerPane: 2})

      component.getInstance().calculateItemsPerPane(800)
      expect(component.getInstance().setState).toHaveBeenCalledWith({itemsPerPane: 3})

      component.getInstance().calculateItemsPerPane(900)
      expect(component.getInstance().setState).toHaveBeenCalledWith({itemsPerPane: 5})
    })
  })

  describe('getScrollContainerWidth()', () => {
    it('should set the total width of the scroll container', () => {
      const expectedValue = 
        (component.getInstance().props.conditions.length / component.getInstance().state.itemsPerPane) * 100

      const testValue = component.getInstance().getScrollContainerWidth()

      expect(testValue).toBe(expectedValue)
    })
  })

  // const getScrollValuesMock = () => {
  //   return {
  //     items: component.getInstance().props.conditions.length,
  //     perPane: component.getInstance().state.itemsPerPane,
  //     axis: component.getInstance().state.xAxisTransform
  //   }
  // }

  // describe('slideRight()', () => {
  //   it('should set the state properties used for the scroll translate values', () => {
  //     const preScroll = getScrollValuesMock()
  //     jest.spyOn(component.getInstance(), 'setState')

  //     // {xAxisTransform: (this.state.xAxisTransform - translateAmount)}
  //     component.getInstance().slideRight()
  //     expect(component.getInstance().setState).toHaveBeenCalledWith(
  //       {xAxisTransform: -100}
  //     )
  //   })
  // })

})
