import React from 'react';
import renderer from 'react-test-renderer';
import { ZipCodeHistory } from './../../../../components/dashboard/toolbar/ZipCodeHistory'
import { store } from '../../../../store/store'
import { setZipCode } from '../../../../actions/ForecastActions';

describe('ZipCodeHistory', () => {
  const component = renderer.create(
    <ZipCodeHistory />
  )

  it('should create the component', () => {
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('zipSelected()', () => {
    it('should set the zip via the store', () => {
      jest.spyOn(store, 'dispatch')
      component.getInstance().zipSelected({preventDefault: () =>{}}, '03063')
      expect(store.dispatch).toHaveBeenCalledWith(setZipCode('03063'))
    })
  })

  describe('toggleMenu()', () => {
    it('should toggle the mobile menu state', () => {
      const currentState = component.getInstance().state.menuOpen
      component.getInstance().toggleMenu()

      expect(component.getInstance().state.menuOpen).toBe(!currentState)
    })
  })
})
